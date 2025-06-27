import React, { Suspense, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Form from './Components/Form'
import Header from './Components/Header'
import ProtectedRoute from './Components/ProtectedRoute'
// import Home from './Components/Home'
// import Contact from './Components/Contact'
// import Help from './Components/Help'
const Home = React.lazy(() => import('./Components/Home'))
const About = React.lazy(() => import('./Components/About'))
const Contact = React.lazy(() => import('./Components/Contact'))
const Help = React.lazy(() => import('./Components/Help'))



function App() {
  const [isLogin, setIslogin] = useState(false)

  const [login, setLogin] = useState(false);
  const [addCartItem, setAddCartItem] = useState([])
  const navigate = useNavigate()
  return (
    <>
      {<Suspense fallback={<div className='mt-50 text-7xl'>Loading....</div>}>
        <Header addCartItem={addCartItem} setAddCartItem={setAddCartItem} />

        <Routes>
          <Route path="/login" element={<Form login={login} setLogin={setLogin} />} />
          <Route path='/' element={<Home addCartItem={addCartItem} setAddCartItem={setAddCartItem} />} />
          <Route path="/about" element={<ProtectedRoute> <About /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute> <Contact /> </ProtectedRoute>} />
          <Route path="/help" element={<ProtectedRoute><Help /> </ProtectedRoute>} />
        </Routes>
      </Suspense>}


    </>
  )
}


export default App





