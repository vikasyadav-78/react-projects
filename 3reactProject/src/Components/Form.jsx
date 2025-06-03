import React from 'react'
import { useState } from 'react'
import Header from './Header';
import Tostify from './Tostify';

export default function Form(props) {

    const [userName, setuserName] = useState('');
    const [Password, setpassword] = useState('');
    const [showpass, setshowpass] = useState("password");
    const [toast, setToast] = useState("")
    const showToast = (message) => {
        setToast(message)
        setTimeout(() => {
            setToast(null)
        }, 3000);
    }

    const butonSumbit = (e) => {
        e.preventDefault();// use for the form page not reload the summit
        if (Password.length === 0 || userName.length === 0) {
            showToast("fill the form")
            setpassword("")
            setuserName("")
        } else if (Password.length <= 8) {
            showToast("Please enter valid name and password")
            setpassword("")
            setuserName("")
        } else {
            props.setLogin(true)
            setpassword("")
            setuserName("")
            showToast("You are login")
        }
    }

    function showbtn() {
        if (showpass === "password") {
            setshowpass("text")
        }
        else {
            setshowpass("password")
        }
    }
    function getUserName(e) {
        setuserName(e.target.value)
    }
    function getUserPassword(e) {
        setpassword(e.target.value)
    }

    // let localstorage = localStorage.setItem("isLogin",true)
    // if (localstorage) {
    //     setLogin(false)
    // }

    const logout = () => {
        props.setLogin(false)
        notify3();
    }

    return (
        <>
            {setToast && <Tostify toast={toast} />}
            {/* <div className={login == true ? "hidden" : "mt-10"}> */}
            {props.login === false ? <div>
                <h1 className='text-2xl font-bold'>Log In </h1>
                <div className='flex justify-center mt-10 '>
                    <form action="" onSubmit={butonSumbit} className='grid grid-cols-1 shadow-2xl shadow-blue-600 p-4'>
                        <input className='w-100 outline-0 border mt-3 p-1 rounded-sm' type="text" name="name" id="username" placeholder='Username' value={userName} onChange={getUserName} />

                        <div className='flex align-middle relative mt-4'>
                            <input className='outline-0 shadow-2xl flex justify-content-center border  w-100 rounded mb-5 p-1 ' type={showpass} name="name" id="password" placeholder='Password' value={Password} onChange={getUserPassword} />
                            <p onClick={showbtn} className='border-0  absolute right-0 top-0 p-1 cursor-pointer'>Show</p>

                        </div>
                        <button className='text-white p-1 mt-3 bg-sky-500 hover:bg-blue-600 '>Sign Up</button>
                    </form>
                </div>
            </div> : <div className={props.login === false ? "hidden" : "mt-10"}>
                <Header logout={logout} />
            </div>
            }
        </>
    )
}
