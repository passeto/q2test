import React, {useState} from 'react'
import { Typography, Grid, Box, IconButton, Dialog, Button, Avatar} from '@mui/material'
import {
    Formik, Field, Form, ErrorMessage,
  } from 'formik'
import * as Yup from 'yup'
import { Close } from '@mui/icons-material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import Styles from '../../styles/Register/FormRegister.module.scss'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import usePeople from '../../context/usePeople'

import useStyles from './style'

export default function ModalUpdatePeople({ open, onClose, people }) {
  const classes = useStyles()
  const [typePassword, setTypePassword] = useState('password')
    const [visiblePassword, setVisiblePassword] = useState(false)
    const {updatePeople, peoples, getPeoples, loading} = usePeople()


    function onSubmit(id, data) {
      updatePeople(id, data)
      .then(() => onClose())
      
    }

    function handleTypePasswordVisibled() {
        setTypePassword('text')
        setVisiblePassword(true)
      }
    
      function handleTypePasswordInvisibled() {
        setTypePassword('password')
        setVisiblePassword(false)
      }


  return (
    <Dialog
      maxWidth="sm"
      fullWidt
      open={open}
      keepMounted
      onClose={onClose}
      aria-describedby="confirm-dialog-description"
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid container>
          <Box display="flex" width="100%" justifyContent="flex-end">
            <IconButton onClick={onClose}>
              <Close />
            </IconButton>
          </Box>
        </Grid>
        <Grid container spacing={2} justifyContent="center" direction="row">
            <Grid item > 
                <Avatar src={people.avatar} className={classes.avatarCard} variant="circle"  />
            </Grid>
            <Grid  item >
                <Box textAlign="center">    
                    <Typography color="primary">
                        {people.name}
                    </Typography>
                    <Typography>
                        {people.document}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
        <Formik
              initialValues={{
                bank: people.bank ? people.bank.bankName : '',
                agency: people.bank ? people.bank.agency : '',
                account: people.bank ? people.bank.account : '',
                empty: '',
                verification: '',
              }}
              validationSchema={Yup.object({
                bank: Yup.string().required('Obrigatório nome do banco'),
                agency: Yup.string().required('Obrigatório inserir agencia'),
                account: Yup.string().required('Obrigatório inserir conta'),
              })}
              onSubmit={(data) => onSubmit(people.id, data)}
            >
              <Form className={classes.form}>
                <section className={classes.sectionForm}>
                    <ErrorMessage className={classes.errorMessage} component="span" name="bank" />
                    <Field
                        name="bank"
                        type="text"
                        placeholder="Nome do banco"
                        className={classes.field}
                    />
                    <ErrorMessage className={classes.errorMessage} component="span" name="agency" />
                    <Field
                        name="agency"
                        type="text"
                        placeholder="Agencia"
                        className={classes.field}
                    />
                    <ErrorMessage className={classes.errorMessage} component="span" name="account" />
                    <Field
                        name="account"
                        type="text"
                        placeholder="Conta"
                        className={classes.field}
                    />
                    <Field name="empty" type="hidden" />
                    <button className={Styles.button__actionGreen} type="submit">
                  Editar
                </button>
                </section>
              </Form>
            </Formik>
      </Grid>
    </Dialog>
  )
}

