import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import LoginPage from './components/Pages/LoginPage.jsx'
import RegisterPage from './components/Pages/RegisterPage.jsx'
import LandingPage from './components/Pages/LandingPage.jsx'
import ProductPage from './components/Pages/ProductPage.jsx'
import CartPage from './components/Pages/CartPage.jsx'
import HomePage from './components/Pages/HomePage.jsx'


function App() {
  

  localStorage.setItem('isUserLoggedIn',false)
  

  return (
   <div>
    <Routes>
      <Route path = '/' element = {<HomePage/>}/>
      <Route path = '/login' element = {<LoginPage/>}/>
      <Route path = '/register' element = {<RegisterPage/>}/>
      <Route path = '/user' element = {<LandingPage/>}/>
      <Route path = '/product' element = {<ProductPage/>}/>
      <Route path = '/cart' element = {<CartPage/>}/>

      
    
    </Routes>
   </div>
  )
}

export default App
