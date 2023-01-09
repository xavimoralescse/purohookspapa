import React from 'react'
import { UseProvider } from './context/UseProvider'

import {HomePage} from './HomePage'
import {AboutPage} from './AboutPage'
import {LoginPage} from './LoginPage'
import { Navigate, Routes, Route, Link } from 'react-router-dom'
import { Navbar } from './Navbar'

export const MainApp = () => {
  return (
   <>
   <UseProvider>
   <Navbar/>
   <hr/>
   <Routes>
      <Route path="/" element={ <HomePage/>} />
      <Route path="/about" element={ <AboutPage/>} />
      <Route path="/Login" element={ <LoginPage/>} />
      //<Route path="/*" element={ <LoginPage/>} />
      <Route path="/*" element={ <Navigate to ="/about"/>} />
   </Routes>

   </UseProvider>
   <h1>MainApp</h1>
   {   /*<Link to="/about">Home</Link>
   <Link to="/about">About</Link>
  <Link to="/login">Login</Link>*/}
  
   </>
  )
}
