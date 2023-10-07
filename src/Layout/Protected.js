import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom'



const Protected = ({children}) => {
  const {authLoading, user} = useContext(AuthContext)

  if(authLoading===true) return <Navigate to="/auth" />

  return user ? children :  <Navigate to="/auth" />
  
}

export default Protected
