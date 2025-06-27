import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import { NavLink, useNavigate } from 'react-router-dom'
import { MdDarkMode, MdLightMode, MdLogout } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { useToggleTheam } from './ToggleTheam'
import Cart from './Cart'
// import Cart from './Cart'






export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);
  const { theam, setTheam } = useToggleTheam()
  const navigate = useNavigate()

  const darkLight = () => {
    if (theam) {
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
      setTheam(false)
    } else {
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      setTheam(true)
    }
  }



  const logout = () => {
    navigate('/login')
    localStorage.removeItem("token")
  }

  // const addCart = (prodect) =>{
  //   const index = addCartItem.findIndex((item)=>{
  //     return prodect.id === item.id
  //   }) 

  //   if (index === -1) {
  //     const newCart = [...addCartItem , {...prodect , quantity : 1}]
  //     setAddCartItem(newCart)
  //   }else{
  //     const Updatequantity = [...addCartItem]
  //     Updatequantity[index].quantity +=1
  //     setAddCartItem(Updatequantity)
  //   }
  // }

  return (
    <div>
      <h1 className='text-2xl font-bold '>Mini Project</h1>
      <div className='flex justify-around mt-10'>
        <div>
          <h1 className='font-bold'>Hello User.</h1>
        </div>
        <div className='flex gap-10'>
          <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ""} to='/' >Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ""} to='/about' >About</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ""} to='/contact' >Contact</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ""} to='/help' >Help</NavLink>

        </div>
        {/* <div>
          <div className='flex items-center'>
            <div className='me-10'>
              {theam === true ? <button onClick={color}><MdLightMode className='text-2xl cursor-pointer' /></button> : <button><MdDarkMode className='text-2xl cursor-pointer' onClick={color} /></button>}
            </div>
            <div className='flex'>
              <button onClick={() => setCartOpen((prev) => !prev)} className='cursor-pointer'><FaShoppingCart className='text-2xl' /></button>
              {props.addCartItem > 0 && (
                <span className='bg-blue-700 h-5 w-5 pt-0.5 rounded-full'>
                  <sup className='font-bold'>{props.addCartItem.length}</sup>
                </span>
              )}
            </div>
            <div className='ms-8 mt-2'>
              <button className='cursor-pointer' onClick={props.logout}> <MdLogout className='text-2xl font-bold' /></button>
            </div>

          </div>
        </div> */}

        <div className='flex gap-4'>
          {theam === true ? <button className='cursor-pointer font-bold' onClick={darkLight}><MdDarkMode className='text-3xl' /></button> :
            <button className='cursor-pointer font-bold' onClick={darkLight}><MdLightMode className='text-3xl' /></button>}
          <button className='cursor-pointer font-bold' onClick={logout}><MdLogout className='text-3xl' /></button>
        </div>

      </div>
      {cartOpen && <div className={theam === true ? 'absolute top-45 w-100 text-white right-20 p-4 bg-black shadow-2xl shadow-amber-300 ' : 'absolute top-15  right-20 p-4 w-100 bg-white text-black shadow-2xl shadow-amber-300 '}>
        <div className='flex p-5 justify-between border-b'>
          <h1 className='font-bold text-2xl'>Carts</h1>
          <button onClick={() => setCartOpen((close) => !close)} className='font-bold border p-1 px-3 buttonCart'>X</button>
        </div>
        <div>
          <Cart add={props.addCartItem} setadd={props.setAddCartItem} theam={theam} setTheam={setTheam} />
          {props.addCartItem.length >= 0 && <p className='font-black text-2xl p-3'>No Item!</p>}
        </div>
      </div>}
    </div>
  )
}










