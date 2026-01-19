import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Navbar from './components/navbar/navbar'
import { Route,Routes } from 'react-router-dom'
import Cart from './pages/cart'
import Store from './pages/store'
import Authenticate from './pages/authenticate '
import RegisterForm from './components/register-form/register-form'
import LogInForm from './components/login-form/login-form'
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from './utils/firebase-config'
import {MainContext}from"./utils/context"
import { fetchUserData } from './utils/firebase-functions'
function App() {
  const [user,loading]=useAuthState(auth);

  useEffect(()=>{
    user&&fetchUser();

  },[user]);
  
  
  const fetchUser=async()=>{

    const res=await fetchUserData(user);
    if(res.success){
console.log(res.data)
    }
  }
  

  return (
<>
<MainContext.Provider value={{user,loading}}>
<Navbar/>
<Routes>
  <Route path="/" element={<Store/>}></Route>
   <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/authenticate" element={<Authenticate/>}></Route>
</Routes>
</MainContext.Provider>

</>
  )
}

export default App
