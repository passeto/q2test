import { makeStyles } from "@mui/styles"

const style = makeStyles(theme => ({
  root: {
    maxWidth: '500px',
    maxHeight: '587px',
    padding: '40px',
  },
  containerTitles: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  messagetoInvite: {
    margin: '12px 40px',
    [theme.breakpoints.down('sm')]: {
      margin: '12px auto',
    },
  },
  msgInvite: {
    fontSize: '1.3rem',
  },
  info: {
    letterSpacing: 0.1,
    marginTop: '10px',
  },
  containerButton: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 30px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  button: {
    padding: '8px',
    width: '260px',
  },
  click: {
    cursor: 'pointer',
  },
  form: {
    width: '100%',
  },
  sectionForm: {
      width: '100%',
      padding: 10,
  },
  field: {
      width: '94%',
      padding: 10,
      marginBottom: 10,
  },
  avatarCard: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    border: '2px solid',
    borderColor: theme.palette.primary.light,
},
  errorMessage: {
    fontSize: 13,
    color: 'red',
  }
}))

export default style
