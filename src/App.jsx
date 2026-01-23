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
import { auth ,database} from './utils/firebase-config'
import {MainContext}from"./utils/context"
import { fetchUserData } from './utils/firebase-functions'
import{setupDBListener} from"./utils/firebase-functions"
import { products } from './utils/prodacts'
import ProductCard from './components/prodact-card/prodact-card'
import { onSnapshot } from 'firebase/firestore'

function App() {
  const [user,loading]=useAuthState(auth);
  const [cartproduct,setcartproduct]  =useState([]);
  const [username,setusername]  =useState();
  const filteredproduct = products.filter(
  (product) =>
    !cartproduct?.some((cartItem) => cartItem?.id === product.id)
);
  useEffect(() => {
    user && fetchUser();
  }, [user]);

  useEffect(() => {
    if (!loading && user) {
      setupDBListener(user, (data=[]) => {
        const updatedProduct = products.filter((product) => {
          return !data?.some((cartproduct) => cartproduct?.id === product.id);
        });
        setcartproduct(data);
      });
    }
  }, [loading, user]);
  const fetchUser = async () => {
    const res = await fetchUserData(user);
    if (res.success) {
      console.log(res);
      setusername(res.data.username);
      setcartproduct(res.data.cartproduct);
    }
  };


  return (
<>
<MainContext.Provider value={{user, loading, cartproduct,filteredproduct, username}}>
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

export default App;
