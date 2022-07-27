import React, {useEffect, useRef, useState} from 'react'
import { Box, Container, Grid, Avatar, Paper, Typography, Card } from '@mui/material'
import CardPeople from '../CardPeople'
import usePeople from '../../context/usePeople'
import { CircularProgress } from '@mui/material';
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
    header: {
        borderBottom: '2px solid #fff',
        color: theme.palette.primary.main,
        padding: theme.spacing(2),
    },
    avatar: {
        width: theme.spacing(16),
        height: theme.spacing(6),
      },
    close: {
        display: 'flex',
        color: 'white',
        fontSize: 32,
        alignItems: 'center',
        '& > svg': {
            cursor: 'pointer',
        },
    },
    container: {
        padding: theme.spacing(2),
        width: '100%'
    },
    paper: {
        width: '100%',
        minHeight: '88vh',
        maxHeight: '88vh',
        padding: theme.spacing(2),
        background: '#f6f6f6',
        overflowY: 'scroll',
    },
    cardContainer: {
        padding: theme.spacing(2),
    },
    avatarCard: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
    card: {
        width: '100%',
        padding: theme.spacing(2),
    },
    titlePaper: {
        fontSize: '32px',
    },
  }));

  

function Content({}) {

    const classes = useStyles()
    const { peoples, getPeoples, loading} = usePeople()
    const columnRef = useRef(null)
    const [pageSize, setPageSize] = useState(5)
    useEffect(() => getPeoples(pageSize), [])


    async function onScroll(e) {
        e.preventDefault()
        const { current } = columnRef
    
        if (current) {
          const { scrollTop, scrollHeight, clientHeight } = current
    
          if (Number(scrollTop.toFixed()) + clientHeight === scrollHeight) {
            await setPageSize(pageSize + 2)
            await getPeoples(pageSize)
            
          }
        }
      }

    return (
        <Paper onScroll={(e) => onScroll(e)} ref={columnRef} className={classes.paper}>
        <Box textAlign="center">
            <Typography className={classes.titlePaper} variant="title">
                Clientes
            </Typography>
        </Box>
       { 
        peoples && (
           peoples.map(people => <CardPeople key={people.id} people={people}/>)
        )
        }
        {
        loading && (
            <Grid style={{display: 'flex', justifyContent: 'center'}}>
                <CircularProgress size={60} color="primary" />
            </Grid>
            
        )
        }
    </Paper>
    )
}

export default Content