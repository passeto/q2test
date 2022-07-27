import React, { createContext, useContext, useEffect, useState, } from 'react'
import Cookies from 'js-cookie'
import Router, { useRouter } from 'next/router'

import api from '../providers/api'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [session, setSession] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [peoples, setpeoples] = useState([])


  /**
   * @param {string} data.refresh - Token to revalidate authenticaded user
   * @param {string} data.access - Token to authenticate in api
   */

  async function validateSession(data) {
    setError(false)
    Cookies.set('token', data)


    api.defaults.headers.authorization = `Bearer ${data}`
    const token = Cookies.get('token')

    if (!token) {
      Router.push({
        pathname: '/entrar',
      })
    }

    Router.push({
      pathname: '/inicio',
    })

    setLoading(false)
  }

  useEffect(() => {
    // eslint-disable-next-line wrap-iife
    (async function () {
      if (Cookies.get('token')) {
        const token = Cookies.get('token')
        await validateSession(token)
      }

    })()
  }, [])

  async function signIn(email, password) {
    setError(false)
    setLoading(true)

    try {
      const { data } = await api.post('auth/login', { email, password })

      if (data.token) {
        await validateSession(data.token)
      }
    } catch (error) {
      return setError({
        message: 'Desculpe! Encontramos problemas ao efetuar seu login',
        details: error.message,
      })
    }

    setLoading(false)
  }


  function singOut() {
    removeAuthCookies()
    Router.push('/entrar')
  }

  function singOutWithoutRedirect() {
    removeAuthCookies()
  }

  function removeAuthCookies() {
    Cookies.remove('token')
    setSession(null)
  }

  const value = {
    signIn,
    singOut,
    loading,
    session,
    setSession,
    validateSession,
    error,
    setError,
    singOutWithoutRedirect,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function ProtectRoute(Component) {
  return () => {
    const { loading, validateSession } = useAuth()
    const inBeatTime = !!Cookies.get('token')

    useEffect(async () => {
      if (!loading) {
        if (!inBeatTime) {
          Router.push({
            pathname: '/entrar',
          })
          Cookies.remove('token')
        }
        const data = Cookies.get('token')
        api.defaults.headers.authorization = `Bearer ${data}`
        validateSession(data)
      }

    }, [loading])

    if (loading) {
      return null
    }

    return (<Component {...arguments} />)
  }
}


export default function useAuth() {
  const context = useContext(AuthContext)

  return context
}
