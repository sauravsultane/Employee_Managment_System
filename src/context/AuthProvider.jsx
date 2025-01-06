import React, { useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'
import { createContext } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const[userData,setUserData]= useState(null)

    const data = getLocalStorage()
    console.log(data)

    useEffect(()=>{
        const {employee,admin}= getLocalStorage()
    setUserData({employee,admin},[])

    })
  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
