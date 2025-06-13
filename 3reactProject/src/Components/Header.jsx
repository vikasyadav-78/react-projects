import React, { useState } from 'react'
import ProductCart from './ProductCart'
import Home from './Home'
import { Link, useNavigate } from 'react-router-dom'
import { products  } from '../Data/prodects'
import { FaShoppingCart } from "react-icons/fa";
import { MdDarkMode, MdLightMode, MdLogout } from "react-icons/md";
import Cart from './Cart'

export default function Header(props) {
  const [filterdData, setFilterdData] = useState(products)
  const [mode, setMode] = useState("black");
  const [addCartItem, setAddCartItem] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const navigate = useNavigate();

  const handleFilter = (value) => {
    if (value != "All") {
      const filter = products.filter((item) => item.category === value);
      setFilterdData(filter);
    }
    else {
      setFilterdData(products);
    }
  }

  const color = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setMode("dark")
    }
    else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setMode("light");
    }
  }

  const cartsAdd = (product) => {
    const index = addCartItem.findIndex((item) => {
      return product.id === item.id;
    })
    if (index === -1) {
      const newCart = [...addCartItem, { ...product, quantity: 1 }]
      showToast("Your product added")
      setAddCartItem(newCart)
    } else {
      const Updatequantity = [...addCartItem]
      Updatequantity[index].quantity += 1
      setAddCartItem(Updatequantity)
    }
  }

  const logout = () => {
    navigate('/login')
  }

  return (
    <>
      <h1 className='text-2xl font-bold mb-10'>Mini Project</h1>
      <div className='text-start flex justify-between items-center'>
        <div>
          <h1 className='text-2xl font-bold whitespace-nowrap'>Hello... User</h1>
        </div>
        <div className='hidden gap-15 lg:flex items-center'>
          <Link className='font-semibold' to='/home'>Home</Link>
          <Link className='font-semibold' to='/about'>About</Link>
          <Link className='font-semibold' to='/contact'>Contact</Link>
          <Link className='font-semibold' to='/help'>Help</Link>
        </div>
        <div className='flex gap-5 items-center'>
          <div className='text-start font-bold border-2 px-3 py-1 hidden lg:flex items-center'>
            <label >Filter </label>
            <select name="" id="" className='outline-0 text-black bg-blue-100' onChange={(e) => handleFilter(e.target.value)}>
              <option className='font-bold text-white bg-black' value="All">(All)</option>
              <option className='font-bold text-white bg-black' value="Cars">(Cars)</option>
              <option className='font-bold text-white bg-black' value="Electric">(Electric)</option>
              <option className='font-bold text-white bg-black' value="Shirt">(Shirt)</option>
            </select>
          </div>
          <div className='flex items-center gap-5'>
            <div className=''>
              {mode === "light" ? <button onClick={color}><MdLightMode className='text-2xl cursor-pointer' /></button> : <button><MdDarkMode className='text-2xl cursor-pointer' onClick={color} /></button>}
            </div>
            <div className=''>
              <button onClick={() => setCartOpen((prev) => !prev)} className='cursor-pointer'><FaShoppingCart className='text-2xl' /></button>
              {addCartItem.length > 0 && <span className='bg-blue-700 h-5 w-5 pt-0.5 rounded-full'><sup className='font-bold'>{addCartItem.length}</sup></span>}
            </div>
            <div className=''>
              <button className='cursor-pointer' onClick={logout}> <MdLogout className='text-2xl font-bold' /></button>
            </div>
          </div>
          {cartOpen && <div className={mode === "light" ? 'absolute top-40   text-white right-0 p-3 bg-black shadow-2xl shadow-amber-300 ' : 'absolute top-40  right-0 p-3 bg-white text-black shadow-2xl shadow-amber-300 '}>
            <div className='flex p-5 justify-between border-b items-center'>
              <h1 className='font-bold text-2xl'>Carts</h1>
              <button onClick={() => setCartOpen((close) => !close)} className='font-bold border p-1 px-3 buttonCart'>X</button>
            </div>
            <div>
              {addCartItem.length <= 0 && <p className='font-black text-2xl p-3'>No Item!</p>}
            </div>
            <Cart add={addCartItem} setadd={setAddCartItem} mode={mode} setmode={setMode} />
          </div>}
        </div>
      </div>
    </>
  )
}
