import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import { Routes, Route, useNavigate } from 'react-router-dom'
import ProductCart from './Components/ProductCart';
import Cart from './Components/Cart';
import Header from './Components/Header';
import LikeunLikeCommet from './Components/LikeunLikeCommet';
import { useEffect } from 'react';

function App() {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate()


  useEffect(()=>{
    if (login===true) {
      navigate('/productCarts')
    }else navigate('/login')
  },[login])

  return (
    <>
      <Routes>
        <Route path="/login" element={<Form login={login} setLogin={setLogin} />} />
        {/* {login && (<>
          <Route path='/productCarts' element={<ProductCart />} />
          <Route path='/likeunLikeCommet' element={<LikeunLikeCommet />} />
        </>)} */}
          <Route path='/productCarts' element={<ProductCart />} />
      </Routes>

    </>
  )
}

export default App

