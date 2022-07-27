import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import * as Yup from 'yup'
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik'
import Snackbar from '@mui/material/Snackbar'
import useAuth from '../../context/useAuth'
import MuiAlert from '@mui/material/Alert'
import Cookies from 'js-cookie'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import Styles from '../../styles/Register/FormRegister.module.scss'
import { useRouter } from 'next/router'


export default function Entrar() {

  const {
    signIn,
  } = useAuth()

  const [typePassword, setTypePassword] = useState('password')
  const [visiblePassword, setVisiblePassword] = useState(false)
  const router = useRouter()




  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
  }

function onSubmit(data) {
  signIn(data.email, data.password)
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
<>
      <div className="login__container">
        <header>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAbLT///8AZ7IAarMAYK8AZbEAY7AAX68AXa4AZLHM2+x3os2BqNCZuNnp8PeOsdQleLpol8e4zeMddLjc6PI+gr40e7r1+fzT4O7l7fXw9fra5vFumslPi8Ksxd8AbrXB1ehZkcVEhb+mwd0AU6p9p8+wyuGLrtRlmsqqw990nstSjsNPjGPfAAALV0lEQVR4nO2cebuiLBiHCxC0fbd9fauzfP/v9wrIKprNNKc613P/MdecNOUn8GxgjQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwKLDg2a34F2AcJYTQBHEiSij6TTIxogxvrtvWIm1K0sW+P2XRbxFJo4/tollk2cXJs9v2EOg+oC6nS35DN7Jygc3mYoye3b6/h6VVEpvT95d4Q2Fz8PYD9ZbCHn13ibcUNj/ps5v4l9xU2By/eSfeVrh98068rTBN3rsTc4Vp6/M63ByP3+dtz5d4eG+PwT1+6zogJIu6s7QCZUHqYekqPL139EbnbUTcIBtFbjfOyV1X5I/p51MwfteShCiQKKGpo3DJat8noozONofD9xTH9nNDJCN4f34kM2WUhEHI/4RSP+nhyREbZHc9HHdxNhbrNJStHIk1FWKy6+zNCJ93pyy/GxrOW635JiAR9fkRjLJ/Q8w/2oUjo/7GFomTaD0yg26yPZDodluTk6OwXqZIZ4U0ZTKUDwd1+F/DwNOlI34ERWWGvNMNfZp2daQVoZN/dNm/nROhq/OVOpMKs2BbWg0uC7X/WGE//PlyJi9GPoJHj7eMo6ewRh9iMldn91bZ6NI5dTpA/0JhnhKYx5ryu060c/+4EaZ4o7TGPGQteerlELHMGhDGpl05JdMdrqnw8l9cQEpomA/IeC1vtcgsPM31t9aZicnuSuLxOTchh+rJSFq2wMVtb0Hls9xjY5lxxORIWLGaCkeB5x51dX+p66JYjsxzhDeyfdqiibseZEfuqgYeRk4Xhu7sfWEsTuzGXvM3eVMeqZB/SUhcsFiY0DlzjyIsPt5X9Qt1B3/7poeR7RzF/ufJmn++ZA9W2IjFUNx98X97BSX5856VdyLeOQKbN2unGIvzAgYpFsP9gz5YobSEQ2HcvotXjUQPledEmLjFxdvZEzqLMRo4Dx/FgIkfrBCLoEuYw1Vh4GSHKZ+KaVm7Lbsvue0NZUUyWNGRU+XRChtilAlb3QnZTLrlh47hhhcEnm/HQCID6wV9ivQ700f3YUM3L1iBQAd+qB9sOY7ckLS5r+EMd2Xty+4lbE3768F9OFbNC2cF0jDsQy3C2Cvw1ym14W/xxIIWFw/EjHmwQjm9Oa2wTyB8BE8Cx9DYS37TSr+pvlU6BpVrHT1YoYkqt+EAVEy1tNi/aOYXbQZ1ki15v1BuxCXwZzZf11F4iZEHLvOHE9XAbthKSNtXUJhsPH1pLYFZjhecKxLGjemqlsLVte/SPeJwTCMGjVB5Dbcwv6zXJDr0BC5rrstIBzsOH2R8Yk9qKSxyjSriUvHvOdzERLgLb4qRtnf5Sd1aS6VC8jcKO7nCHVM1DEbwQaYF7e8qhZ/ia85n7OpdvVV78TBXWDJKH9GHi8lCMlkoU3iOD/IZhBWKPmzYTYr9DP0zrl0tk/OwJNAVdrvePNwPph7jfB4WWE2pTJ0q56FtZ5lf7LjWr6/dsKXcPLdqKRwR7NMIKjxNs4RJxqaVttQKWQsCP+4pkSLh7b7+oT9cKKQ3W/IZISO3ktyV8MhsaUQQ/0Ft7lqMkRFG+GnmT/qGwuiGQmVpGBmI8ye8d2L+v5JqNeGPYqWPEd/IHGsUHG0Vop+CUWAe76yHZb0shxOpHdPgWHxhjfJ+SoMKZQ58UdeTibgt8N6VGOHVw/eSfTQQViEU68tmxqiuwuyZiWGbmYlI2MuggZPPVdlZPPUEDu9eiKEXMbRD9xLDZcnEMw1UTjBtiuF0h0KZ+2U3k2lLcHIQO2HFiRds9/8rLh7cUIjEIByFQvm1HC5M3KSYp8hEbkvvUCizlSynkClSKH2SZRiVsLKR14Wric+iJHAwCJcQGjAyxT9iOVivhdERi3T7gO5QmJc6M3Mqe6pTHHLsYvUu8qPtEOFkudCOYl01lqUU1sgrm36gK0PolOJ7FMprfVKVJRbSg0QMDFV9YaEtbXcrlKWfzHQ7N8N5oMQnqLAozeXOvhImh/zydylsxKLNEW4w0YnpwB39RASsza7sW+SH23+mMJ9PzeWQJUg8O4wjNpMh8pZ3LZ7JS7WZXN/DGFEkwmM+X3KFxZgGJwGFstE8XsvLnn1K9V0JlldVA8ovO/2pwgbJi8i903CcUJo0Nv284JP75OQs/1yehrvshGj2pQxA1vzco878uHQ63QUUyhHDDYmeY6P2LKKZzuk5X+FLVSLwMIXFsCGnpYYQ6QSPp3yZzFtGsLiGsmvZsXwDRVRiRpZ6cj5OYYNuCps4eAvNogLdLIvHWzvelHKFnXD9gH8oBgcahxSMTPn9gQobiLQn7vfS0y5xTuh4dq31LYcwLl0/vAbrNNL5CO+E2XfL+85oaqW2j1TIJYw7o7noqXSx726I76oQm/X3chlzOb+0G9r24n4Jxw2v1/jZNZ7xYwec3xV/bedyAPVap2HimFayqhCmKUnCAuCIxiLAmcWFLRPyBEQJo1GUpQnUdi1+lU1X2zAK7SJxP8UoIYxF/F+SeCejdacGJQsAJSLF5A9XT/U5/2S3TfiiKKrBXe2RmUv9bn9DRGVmEUsP/N6b/kqQhm4/5knJYfobJaoALe2lZdWbd4dada31r1TYYFut8Hf2YWZsNvtUOuBfOQ85mLLGeEfZ27/KUAUu8cCcYPRSfWLoQ/8rOHT2U8DtAl/DGSOF0AKt9Qnm0K6jPvOmAD4Gzn4KZbnSvBO5kZAsq0nMxiyqs4WFs5cmL6VwLk/emV6eDaZtpzaYWKsNpnyP9UYM1xdZZz/7DdhyhdnTtyUSO2U2GZTxt9bai9p6xilZVPw5qhQ2t0ZiXt7KMbE8Rno4Xo0W+qk+LO7l+2kqFTa/dKOJs2/c6q9Il3xS7Y6ssfv8N2CqFaZqElnDTmBtQmS6JKS3CxJdu5/fsbj7j7AU7iUtu36jaibeZnN7+c4av/luBGt9qWJf6U9hKcSECtjAFIxULZd5dS17/yrT1aeLPJvp72+fPgsdhXqLCo5NxUhaTd0rqbKololUGVozr8NZyy/P9hSckEJrM16ej1CVoIyUn5tYE4zo9EWsSpr+vj7bU3CCChuxdn7SL+gI5aAjGytKs8zQVC2Wcp7vKThhhaZ0K/Yb6kansX4Ly34lOdJ2KLOdTD+d6hrfTxFWaH7cQeww0K98nBLt/pztlER7jINZEnkBT8Gp04fGgQ+wqfnbcSjSGw0X/+kY50US7pJ5qJvJ56HeC8V7hSpv7uwIjvUj0f+5vMQsLFEYmb2f3JbqqIVnTVj7Anu3oeUxFD+vJUxIIcJme/JObR3niMBT63VK6eTiCey/ygvLdkyTb+eKhyZR4pu19LiUa/t6zPbsnNcPXJcvMkYdhXOJswKWjUucqD/ybUg7729J4r6f9fESnoJTnVvw9fnorP+QGxZ0HOrs18DUTpFXr+EpONUKucHXQZiad0i/DOtUq9CH98UXoVLhVxK0khr3VUErXg9tOnsWVQqHfBQmhdezDStHiPEjL/UTLOUK92JnRvWvkTgJrtXbr5A1KUoULk4zuYcCBd9AVzi/0mEpfKXFWEvhephzmCGifiWG+NtHHJzw+/UV7iKz6UIf34WEGexS2usrDL1oExk/bv8chv7Q3mr8ngpjnfjNre3KsVl1tS/1jgoLBZv8Y6PFepfzLRVSnTGkzvqq+UUZa8npHRWaoNt7Td7a7Gvis3dUaAnxitdEH9CvirylQlO8nni5AjW2Rv++2hsqtJZ9/VVAa2lCh9+vqhD3cpYFhVF/qQ4Wmkxa6pBepMGztPT0Z4K1lyseM7/tVWyx/kEwE5riitMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAN+J/bYigxU+17aYAAAAASUVORK5CYII="/>
        </header>
        <div className="login__wrapperLeft">
          <section className="login__content">
            <div className="login__area">
              <h2 className="login__header">Olá,</h2>
              <p className="login__text">
                Insira seu email e senha <br />
                para acessar sua conta.
              </p>
            </div>
            <Formik
              initialValues={{
                email: '',
                password: '',
                empty: '',
                verification: '',
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email('Email inválido')
                  .required('Preencher com seu email'),
                password: Yup.string().required('Preencher com sua senha'),
              })}
              onSubmit={onSubmit}
            >
              <Form className={Styles.form_login}>
                <section className={Styles.form__LineFull}>
                  <ErrorMessage component="span" name="email" />
                  <Field
                    name="email"
                    type="text"
                    placeholder="E-mail"
                    className={Styles.form_mail}
                  />
                  <ErrorMessage component="span" name="password" />
                  <Field
                    name="password"
                    type={typePassword}
                    placeholder="Senha"
                    className={Styles.form_pass}
                  />

                  <Field name="empty" type="hidden" />
                  {!visiblePassword ? (
                    <div className={Styles.password__show__login}>
                      <VisibilityIcon
                        value
                        onClick={handleTypePasswordVisibled}
                      />
                      <p>Mostrar senha</p>
                    </div>
                  ) : (
                    <div className={Styles.password__show__login}>
                      <VisibilityOffIcon
                        value={false}
                        onClick={() => handleTypePasswordInvisibled()}
                      />
                      <p>Ocultar senha</p>
                    </div>
                  )}
                </section>
                <button className={Styles.button__actionGreen} type="submit">
                  Entrar
                </button>
              </Form>
            </Formik>

          </section>
        </div>
      </div>
    </>
  )
}
