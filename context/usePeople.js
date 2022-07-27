import React, { createContext, useContext, useEffect, useState, } from 'react'
import Cookies from 'js-cookie'
import Router, { useRouter } from 'next/router'

import api from '../providers/api'

export const PeopleContext = createContext({})

export function PeopleProvider({ children }) {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [peoples, setpeoples] = useState([])


  async function getPeoples(size) {
    setLoading(true)
    try {
        const { data } = await api.get(`/peoples?_page=1&_limit=${size}`, {
          headers: {
            authorization: `Bearer ${Cookies.get('token')}`,
          }})
  
        if (data) {
          await setpeoples(data)
        }
      setLoading(false)
        
      } catch (error) {
          setLoading(false)
          return setError({
          message: 'Desculpe! Encontramos problemas ao listar as pessoas',
          details: error.message,
          })
        
        }
  }

  async function updatePeople(id, data) {
    setLoading(true)
    try {
         const update = await api.patch(`/peoples/${id}`, {
          bank: {
            bankName: data.bank,
            code: data.agency,
            agency: data.agency,
            account: data.account,
            
          }
        })
          
        if (update.data) {
          await getPeoples(5)
        }
      setLoading(false)
        
      } catch (error) {
          setLoading(false)
          return setError({
          message: 'Desculpe! Encontramos problemas ao editar',
          details: error.message,
          })
        
        }
  }


  const value = {
    loading,
    getPeoples,
    peoples,
    updatePeople,
  }

  return (
    <PeopleContext.Provider value={value}>
      {children}
    </PeopleContext.Provider>
  )
}




export default function useAuth() {
  const context = useContext(PeopleContext)

  return context
}
