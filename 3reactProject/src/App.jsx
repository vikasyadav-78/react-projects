import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import Header from './Components/Header'
import ProtectedRoute from './Components/ProtectedRoute'
import { Routes, Route, Navigate } from 'react-router-dom'
import ProductCart from './Components/ProductCart'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Help from './Components/Help'

function App() {
  // const [login, setLogin] = useState(false)

  return (
    <>

      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" />} /> */}
        {/* <Route path='/' element={<ProductCart/>} />  */}
        <Route path="/login" element={<Form />} />
        <Route path="/" element={
          <ProtectedRoute> <Header /> </ProtectedRoute>
        } />
        <Route path="/home" element={
          <ProtectedRoute> <Home /> </ProtectedRoute>
        } />
        <Route path="/about" element={
          <ProtectedRoute> <About /></ProtectedRoute>
        } />
        <Route path="/contact" element={
          <ProtectedRoute> <Contact /> </ProtectedRoute>
        } />
        <Route path="/help" element={
          <ProtectedRoute> <Help /> </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}

export default App
