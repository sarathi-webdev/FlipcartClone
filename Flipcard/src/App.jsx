import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from '../src/Pages/Home/Home'
import Cart from '../src/Pages/Cart/Cart'
import Productdetails from './Pages/ProductDetails/Productdetails'
import Product from './Pages/Products/Product'
import Navbar from './Components/Navbar/Navbar'
import { useDispatch } from 'react-redux'
import supabase from './supabase'
import { setUser } from './Slice/UserSlice'




const App = () => {
   

  const dispatch = useDispatch()

  const getUser =  async ()=>{
     const {data,error} = await supabase.auth.getSession()
   
    
      dispatch(setUser(data.session.user));
    
  }
 
  useEffect(()=>{
    getUser();
  },[])



  return (
    
      <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/ProductDetails/:id" element={<Productdetails />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </ BrowserRouter>
    
    
  )
}

export default App
