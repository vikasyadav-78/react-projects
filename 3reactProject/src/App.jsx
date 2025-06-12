import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import Header from './Components/Header'
import ProtectedRoute from './Components/ProtectedRoute'
import { Routes, Route, Navigate } from 'react-router-dom'
import ProductCart from './Components/ProductCart'

function App() {
  // const [login, setLogin] = useState(false)

  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/login" />} /> */}
      <Route path='/' element={<ProductCart/>} /> 
      <Route path="/login" element={<Form  />} />
      <Route path="/header" element={
        <ProtectedRoute>
          <Header />
        </ProtectedRoute>
      } />
    </Routes>
  )
}

export default App
