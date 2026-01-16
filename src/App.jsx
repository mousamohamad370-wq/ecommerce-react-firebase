import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Navbar from './components/navbar/navbar'
import { Route,Routes } from 'react-router-dom'
import Cart from './pages/cart'
import Store from './pages/store'
import Authenticate from './pages/authenticate '

function App() {
  

  return (
<>

<Navbar/>
<Routes>
  <Route path='/' element={<Store/>}></Route>
   <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/Authenticate' element={<Authenticate/>}></Route>
</Routes>

</>
  )
}

export default App
