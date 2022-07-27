import React, {useState} from 'react'
import { Box, Container, useMediaQuery, Grid, Avatar, Paper, Typography, Card, IconButton, useTheme} from '@mui/material'
import { makeStyles } from "@mui/styles"
import EditIcon from '@mui/icons-material/Edit';
import ModalUpdatePeople from '../ModalUpdatePeople'


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
        padding: theme.spacing(2),
        background: '#f6f6f6'
    },
    cardContainer: {
        padding: theme.spacing(2),
    },
    avatarCard: {
        width: theme.spacing(6),
        height: theme.spacing(6),
        border: '2px solid',
        borderColor: theme.palette.primary.light,
    },
    card: {
        width: '100%',
        padding: theme.spacing(2),
        border: '1px solid',
        borderColor: theme.palette.primary.light,
    },
    editDesktop: {
        justifyContent: 'flex-end', 
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
        },
    },
    editButton: {
        fontSize: 32, 
        color: theme.palette.primary.main
    },
    titles: {
        fontWeight: 'bold'
    }
  }));

function CardPeople({people}) {
    const classes = useStyles();
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const [openUpdate, setOpenUpdate] = useState(false)
    return (
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12} className={classes.cardContainer}>
            <Card className={classes.card}>
                <Grid container spacing={4} direction="row"  alignContent="center">
                    <Grid item xs={12} sm={12} md={12} lg={12} style={{minWidth: 200, justifyContent: 'center', alignItems: 'center'}} justifyContent="center" direction="row" alignItems="center">
                        <Grid container spacing={2} justifyContent="center" direction="row">
                            <Grid item > 
                                <Avatar src={people.avatar} variant="circle" className={classes.avatarCard}  />
                            </Grid>
                            <Grid  item >
                                <Box textAlign="center">    
                                    <Typography color="primary" variant="title">
                                        {people.name}
                                    </Typography>
                                    <Typography className={classes.titles} variant="subtitle1">
                                        {people.document}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} style={{ alignItems: 'center', }}>
                        <Grid container spacing={2} direction="row">
                            <Grid item xs={12} sm={4} md={3} lg={3}>
                                <Box textAlign="center">
                                    <Typography className={classes.titles}>
                                        Banco
                                    </Typography>
                                    <Typography>
                                    {people.bank ? people.bank.bankName : ''}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3} lg={3}>
                                <Box textAlign="center">
                                    <Typography className={classes.titles}>
                                        Agencia
                                    </Typography>
                                    <Typography>
                                       {people.bank ? people.bank.agency : ''}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3} lg={3}>
                                <Box textAlign="center">
                                    <Typography className={classes.titles}>
                                        Conta
                                    </Typography>
                                    <Typography>
                                        { people.bank ? people.bank.account : ''}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3} className={classes.editDesktop}>
                                <IconButton onClick={() => setOpenUpdate(true)}>
                                    <EditIcon className={classes.editButton} />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid> 
            </Card>
            {   
                openUpdate && (
                    <ModalUpdatePeople people={people} open  onClose={() => setOpenUpdate(false)}/>
                )
            }
          
        </Grid>
    )
}

export default CardPeople