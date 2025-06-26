import React, { useState } from 'react'
import { products } from '../Data/prodects'
import { FaShoppingCart } from "react-icons/fa";
import { MdDarkMode, MdLightMode, MdLogout } from "react-icons/md";
import Cart from './Cart';
import LikeunLikeCommet from './LikeunLikeCommet';
import Tostify from './Tostify';
import Header from './Header';
import { useSearchParams } from 'react-router-dom';

 

export default function ProductCart(props) {
  const [filterdData, setFilterdData] = useState(products)
  // const [addCartItem, setAddCartItem] = useState([]); 
  const [toast, setToast] = useState("")
  const [search, setSearch] = useSearchParams()
  const addCartItem = props.addCartItem;
  const setAddCartItem = props.setAddCartItem;

  const showToast = (message) => {
    setToast(message)
    setTimeout(() => {
      setToast(null)
    }, 3000);
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
  console.log(cartsAdd)


  const filterCategory = search.get("category") || 'All';

  const handleChange = (e) => {
    const category = e.target.value;
    setSearch({ category })
  }
  

  
  const filtered = filterCategory === 'All' ? filterdData:filterdData.filter((item)=>item.category===filterCategory)  

  return (
    <>
      {setToast && <Tostify toast={toast} />}

      <div className='flex justify-between relative' >
        <div className='text-start font-bold'>
          <label >Filter </label>
         
          <select name="" id="" className='border-2 rounded' onChange={handleChange}>
            <option className='font-bold text-white bg-black' value="All">All</option>
            <option className='font-bold text-white bg-black' value="Electric">Electric</option>
            <option className='font-bold text-white bg-black' value="Cars">Cars</option>
            <option className='font-bold text-white bg-black' value="Shirt">Shirt</option>
          </select>
          
          {/* <Header add={addCartItem} setadd={setAddCartItem} /> */}
        </div>
         
        
      </div>
      <div className='flex justify-evenly flex-wrap' style={{ height: "auto", width: "100%" }}>
        {filtered.map((datas) => <div className='shadow-2xl shadow-blue-700  m-5 p-5'>
          <img className='h-80 w-80 object-cover' src={datas.img} alt="" />
          <p className='text-bold text-start p-1 font-bold'>Name : {datas.name}</p>
          <p className='text-bold text-start p-1 font-bold'>Price : ₹ {datas.price}</p>
          <div className='flex gap-5'>
            <button type='button' className='text-white mt-5 bg-red-600 hover:bg-red-500 w-25 py-1  gap-3 flex px-4 align-middle cursor-pointer'>Buy Now</button>
            <button type='button' onClick={() => cartsAdd(datas)} className='text-white mt-5 hover:bg-blue-500 bg-blue-700 w-30 py-1  gap-3 flex px-4 align-middle cursor-pointer'>Add to Cart</button>
          </div>
          <div className='mt-5'>
            <LikeunLikeCommet  />
          </div>
        </div>
        )}
      </div>
    </>
  )
}
