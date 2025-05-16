import React, { useState } from 'react'
import { products } from '../Data/prodects'

export default function ProductCart(props) {
  const [filterdData, setFilterdData] = useState(products)

  // const filters = filterdData==="All"?products:products.filter((item)=>{
  //   return item.category===filterdData
  // })
  // console.log(filters);
  

  const handleFilter = (value) =>{
    if (value !="All") {
      const filter = products.filter((item) => item.category === value);
      setFilterdData(filter);
    }
    else{
      setFilterdData(products);
    }
  }


  return (
    <>
      <div className='text-start font-bold'>
        <label >Filter </label>
        <select name="" id="" className='border-2 rounded' onChange={(e)=>handleFilter(e.target.value)}>
          <option className='font-bold' value="All">All</option>
          <option className='font-bold' value="Cars">Cars</option>
          <option className='font-bold' value="Electric">Electric</option>
          <option className='font-bold' value="Shirt">Shirt</option>
        </select>
      </div>
      <div className='flex justify-evenly flex-wrap' style={{ height: "auto", width: "100%" }}>
        {filterdData.map((datas) => <div className='shadow-2xl m-5 p-5'>
            <img className='h-80 w-80 object-cover' src={datas.img} alt="" />
            <p className='text-bold text-start p-1 font-bold'>Name : {datas.name}</p>
            <p className='text-bold text-start p-1 font-bold'>Price : {datas.price}</p>
            <button type='button' className='text-white mt-5 bg-blue-700 rounded-lg w-28 py-1  gap-3 flex px-4 align-middle cursor-pointer'>{datas.btn}</button>
          </div>
        )}
      </div>
    </>
  )
}
