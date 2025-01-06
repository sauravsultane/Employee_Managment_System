import React, { useContext, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmploeeDashboard from './components/Dashboard/EmployeeDashboard.jsx/EmploeeDashboard'
import AdminDashboard from './components/Dashboard/EmployeeDashboard.jsx/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useState } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user,setUser]=useState(null)

  const handelLogin=(email,password)=>{
    if(email=="admin@gmail.com" && password==123){
      setUser('admin')
      console.log(user)
    }else if(email=="user@gmail.com"&& password==123){
      setUser('employee')
      console.log(user)
    }else{
      alert("invalid")
    }

  }
  const data = useContext(AuthContext);
  // handelLogin("user@gmail.com",123);
  return (
    <>
    {!user ? <Login handelLogin={handelLogin}/>:" "}
    {user=='admin' ?<AdminDashboard />:""}
    {user=='employee' ?<EmploeeDashboard/>:""}
    </>
  )
}

export default App
