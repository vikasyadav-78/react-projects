import React, { useState } from 'react'
import { products } from '../Data/prodects'
import { FaShoppingCart } from "react-icons/fa";
import { MdDarkMode, MdLightMode, MdLogout } from "react-icons/md";
import Cart from './Cart';
import LikeunLikeCommet from './LikeunLikeCommet';
import Tostify from './Tostify';


export default function ProductCart(props) {
  const [filterdData, setFilterdData] = useState(products)
  const [mode, setMode] = useState("black");
  const [addCartItem, setAddCartItem] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState("")

  const showToast = (message) => {
    setToast(message)
    setTimeout(() => {
      setToast(null)
    }, 3000);
  }

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




  return (
    <>
    {setToast && <Tostify toast={toast} />}
      <div className='flex justify-between relative' >
        <div className='text-start font-bold'>
          <label >Filter </label>
          <select name="" id="" className='border-2 rounded' onChange={(e) => handleFilter(e.target.value)}>
            <option className='font-bold text-white bg-black' value="All">All</option>
            <option className='font-bold text-white bg-black' value="Cars">Cars</option>
            <option className='font-bold text-white bg-black' value="Electric">Electric</option>
            <option className='font-bold text-white bg-black' value="Shirt">Shirt</option>
          </select>
        </div>
        <div className='flex items-center'>
          <div className='me-10'>
            {mode === "light" ? <button onClick={color}><MdLightMode className='text-2xl cursor-pointer' /></button> : <button><MdDarkMode className='text-2xl cursor-pointer' onClick={color} /></button>}
          </div>
          <div className='flex'>
            <button onClick={() => setCartOpen((prev) => !prev)} className='cursor-pointer'><FaShoppingCart className='text-2xl' /></button>
            {addCartItem.length > 0 && <span className='bg-blue-700 h-5 w-5 pt-0.5 rounded-full'><sup className='font-bold'>{addCartItem.length}</sup></span>}
          </div>
          <div className='ms-8 mt-2'>
            <button className='cursor-pointer' onClick={props.logout}> <MdLogout className='text-2xl font-bold' /></button>
          </div>

        </div>
        {cartOpen && <div className={mode === "light" ? 'absolute top-15   text-white right-0 p-3 bg-black shadow-2xl shadow-amber-300 ' : 'absolute top-15  right-0 p-3 bg-white text-black shadow-2xl shadow-amber-300 '}>
          <div className='flex p-5 justify-between border-b'>
            <h1 className='font-bold text-2xl'>Carts</h1>
            <button onClick={() => setCartOpen((close) => !close)} className='font-bold border p-1 px-3 buttonCart'>X</button>
          </div>
          <div>
            {addCartItem.length <= 0 && <p className='font-black text-2xl p-3'>No Item!</p>}
          </div>
          <Cart add={addCartItem} setadd={setAddCartItem} mode={mode} setmode={setMode} />
        </div>}
      </div>
      <div className='flex justify-evenly flex-wrap' style={{ height: "auto", width: "100%" }}>
        {filterdData.map((datas) => <div className='shadow-2xl shadow-blue-700  m-5 p-5'>
          <img className='h-80 w-80 object-cover' src={datas.img} alt="" />
          <p className='text-bold text-start p-1 font-bold'>Name : {datas.name}</p>
          <p className='text-bold text-start p-1 font-bold'>Price : ₹ {datas.price}</p>
          <div className='flex gap-5'>
            <button type='button' className='text-white mt-5 bg-red-600 hover:bg-red-500 w-25 py-1  gap-3 flex px-4 align-middle cursor-pointer'>Buy Now</button>
            <button type='button' onClick={() => cartsAdd(datas)} className='text-white mt-5 hover:bg-blue-500 bg-blue-700 w-30 py-1  gap-3 flex px-4 align-middle cursor-pointer'>Add to Cart</button>
          </div>
          <div className='mt-5'>
            <LikeunLikeCommet mode={mode} />
          </div>
        </div>
        )}
      </div>
    </>
  )
}
