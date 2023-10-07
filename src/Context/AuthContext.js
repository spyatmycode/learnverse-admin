import React, { useEffect, useState } from 'react'
import { createContext } from'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [authLoading, setAuthLoading] = useState(false)
  const [user, setUser] = useState(null)

  onAuthStateChanged(auth,(user)=>{
    if(!user){
      setAuthLoading(false)
      return
    }

    setUser(user)
    setAuthLoading(false)

  })


  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(!user){
        setAuthLoading(false)
        return
      }
  
      setUser(user)
      setAuthLoading(false)
  
    })
  },[])

  return (
   <AuthContext.Provider value={{authLoading, user}}>
      {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider
