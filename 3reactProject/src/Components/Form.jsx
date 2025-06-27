import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast} from 'react-toastify';

function Form(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const notify = () => toast("You Are Log in");
    const filed = () => toast("Please Fill the input box");
    const validation = () => {
        if (password === "") {
           toast.error("plese enetr password")
        } else {
            props.setIslogin(true)
            localStorage.setItem('token', JSON.stringify(true));
            navigate('/')
            // toast.success("You are log in")
          
        }
    }

    const onSummbit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div className='flex justify-center items-center mt-20'>
                <div className='border-2 p-5 py-8'>
                    <h1 className='font-bold text-xl'> Log in</h1>
                    <form action="" onSubmit={onSummbit}>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} className='outline-0 mt-3 w-70 border-2 rounded px-3 py-1' type="text" placeholder='Username ' /> <br />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} className='outline-0 w-70 mt-4 border-2 rounded px-3 py-1' type="password" placeholder='Password ' /><br />
                        <button type='submit' onClick={validation} className='bg-green-600 px-4 py-1 rounded-lg mt-5 cursor-pointer'>Sumbit</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Form
