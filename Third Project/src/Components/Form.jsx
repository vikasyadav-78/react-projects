import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Header from './Header';
// import ProductCart from './ProductCart';

export default function Form() {

    const [userName, setuserName] = useState('');
    const [Password, setpassword] = useState('');
    const [login, setLogin] = useState(true);
    const [showpass, setshowpass] = useState("password");

    const notify = () => toast("WelCome back User ");
    const notify1 = () => toast("Please Fill the input");
    const notify2 = () => toast("Your password length is not Valid");
    const notify3 = () => toast("Your Are Log Out ");
    const notify4 = () => toast("Successfully Added");

    // const logIn = () => {
    //     let username = "Vikas@Yadav"
    //     let password = "Vikas@7878"
    //     if (username === userName && password === Password) {
    //         notify();
    //         setpassword("")
    //         setuserName("")
    //     } else {
    //         notify1()
    //         setpassword("")
    //         setuserName("")
    //     }


    // }

    const butonSumbit = (e) => {
        e.preventDefault();// use for the form page not reload the summit
        if (Password.length == "" || userName.length == "") {
            notify1();
            setpassword("")
            setuserName("")
        } else if (Password.length <= 8) {
            notify2()
            setpassword("")
            setuserName("")
        } else {
            setLogin(true)
            setpassword("")
            setuserName("")
            notify();
            console.log(notify)
        }
    }
    function showbtn() {
        if (showpass == "password") {
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
        setLogin(false)
        notify3();
    }

    return (
        <>
            {/* <div className={login == true ? "hidden" : "mt-10"}> */}
            {login === false ? <div>
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
            </div>:<div className={login == false ? "hidden" : "mt-10"}>
                <Header logout = {logout} /> 
                {/* <ProductCart /> */}
            </div>}        
            <ToastContainer />
        </>
    )
}
