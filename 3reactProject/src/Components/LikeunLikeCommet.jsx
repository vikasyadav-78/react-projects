import React, { useState } from 'react'
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";
import { IoMdSend } from "react-icons/io"; 
import Tostify from './Tostify';


export default function LikeunLikeCommet(props) {
    const [Like, setLike] = useState(0)
    const [UnLike, setUnLike] = useState(0)
    const [commint, setCommint] = useState([])
    const [input, setInput] = useState("")
    const [toast , setToast] = useState("")


   
    const like = () => {
        setLike(Like + 1)
    }
    const unLike = () => {
        setUnLike(UnLike + 1)
    }
    const reset = () => {
        setLike(0);
        setUnLike(0);
    }

    const showToast = (message) => {
        setToast(message)
        setTimeout(() => {
            setToast(null)
        }, 3000);
    }

    const comments = () => {
        if (input != "") {
            setCommint([...commint, input])
            setInput("")
        } else {
            showToast('Please Enter Your Commit')
        }
    }

    const inputValue = (e) => {
        setInput(e.target.value);
    }

    return (
        <>
        {setToast && <Tostify toast={toast}/>}
            <div className='flex gap-10 items-center'>
                <div className='flex gap-2 '>
                    <button className='cursor-pointer text-2xl' onClick={like} ><AiFillLike /></button>
                    <p>{Like}</p>
                </div>
                <div className='flex gap-2'>
                    <button className='cursor-pointer text-2xl' onClick={unLike}><AiFillDislike /></button>
                    <p>{UnLike}</p>
                </div>
                <div className='flex gap-2'>
                    <button className='cursor-pointer text-2xl fw-bold' onClick={reset}><GrPowerReset /></button>
                </div>
            </div>

            <div className='text-start mt-5 border w-[80%] flex'>
                {props.mode==="light" ? <input value={input} onChange={inputValue} className='text-start  h-9 outline-0 p-1 w-full bg-black text-white fw-bold' type="text" placeholder='Comment.....' /> : <input value={input} onChange={inputValue} className='text-start  h-9 outline-0 p-1 w-full bg-white text-black fw-bold' type="text" placeholder='Comment.....' />}
                <button onClick={comments} className='cursor-pointer'><IoMdSend className='text-2xl' /></button>
            </div>

            <div className='mt-2'>
                {commint.map((data, index) =>
                    <div className='text-start flex gap-2'>
                        <p>{index + 1}.</p>
                        <p>{data}</p>
                    </div>
                )}
            </div>
        </>
    )
}
