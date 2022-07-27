import React, {useState, useEffect, useRef} from 'react'
import { ProtectRoute } from '../../context/useAuth'
import { useRouter } from 'next/router'
import useAuth from '../../context/useAuth'
import { Box, Container, Grid, Avatar, Paper, Typography, Card } from '@mui/material'
import Logo from '../icon/Logo'
import { makeStyles } from "@mui/styles"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CardPeople from '../CardPeople'
import Content from './Content'

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
    }
  }));



function Home(){
    const classes = useStyles();
    const router = useRouter()
    const {peoples, getPeoples, loading, singOut} = useAuth()
    const columnRef = useRef(null)

    function handleback(data) {
        router.push('/entrar')
    }

    return (
        <div className="home__container">
            <Grid className={classes.header} container justifyContent="space-between">
                <Grid item   >
                    <Avatar variant="square" className={classes.avatar} src="https://quero2pay.com.br/wp-content/uploads/2021/03/Quero2Pay_logo.svg" />
                </Grid>
                <Grid item className={classes.close}>
                    <ExitToAppIcon color="inherit" fontSize="inherit" onClick={() => singOut()} />
                </Grid>
            </Grid>
            <Grid container className={classes.container}>
              {/* <Paper onScroll={onScroll} ref={columnRef} className={classes.paper}>
                    <Box textAlign="center">
                        <Typography variant="title">
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
                            <div>YUSAGDOIUASGDUIASGDUIOSI</div>
                        )
                    }
                </Paper>*/}
                <Content/>
            </Grid>

        </div>
    )
}

export default ProtectRoute(Home)