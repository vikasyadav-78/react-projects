import React, { useState } from 'react'
import { AiFillLike ,AiFillDislike } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";
import { IoMdSend } from "react-icons/io";




export default function LikeunLikeCommet() {
    const [Like, setLike] = useState(0)
    const [UnLike, setUnLike] = useState(0)
    const [commint, setCommint] = useState([])


    const like = () =>{
        setLike(Like+1)
    }
    const unLike = () =>{
        setUnLike(UnLike+1)
    }
    const reset = () =>{
        setLike(0);
        setUnLike(0);
    }
  return (
    <>
        <div className='flex gap-10 items-center'>
            <div className='flex gap-2 '>
                <button className='cursor-pointer'  onClick={like} ><AiFillLike /></button>
                <p>{Like}</p>
            </div>
            <div className='flex gap-2'>
                <button className='cursor-pointer' onClick={unLike}><AiFillDislike /></button>
                <p>{UnLike}</p>
            </div>
            <div className='flex gap-2'>
                <button className='cursor-pointer' onClick={reset}><GrPowerReset /></button>
            </div>
        </div>

        <div className='text-start mt-5 border w-[20%] flex gap-6 p-1'>
            <input className='text-start  h-9 outline-0 p-1.5 w-full' type="text"  placeholder='Comment.....'/>
            <button className='cursor-pointer'><IoMdSend className='text-2xl' /></button>
        </div>

        <div>
        {commint.map((commnet) =>
        
            <div className=''>

            </div>
        )}
        </div>
    </>
  )
}
