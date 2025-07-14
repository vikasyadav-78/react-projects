import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Hero from './Components/Hero';
const App = () => {
  return (
    //  <BrowserRouter>
    //   <Routes> 
    //       <Route path="/" element={<Home />} />
    //   </Routes>
    // </BrowserRouter>
    <Hero />
  )
}

export default App