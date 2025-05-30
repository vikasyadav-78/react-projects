// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/Form'
import LikeunLikeCommet from './Components/LikeunLikeCommet'
import Tostify from './Components/Tostify'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
// import Header from './Components/Header'
// import ProductCart from './Components/ProductCart'

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <Form /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Form />} ></Route>
        </Routes>
      </BrowserRouter>
      {/* <Tostify /> */}
      {/* <LikeunLikeCommet /> */}
    </>
  )
}

export default App
