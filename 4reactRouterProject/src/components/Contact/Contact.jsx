import React, { useState } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";


const Contact = () => {

    const [input, setInput] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (input === '') {
            alert('Please Fill the From')
        } else {
            alert("From Sumbited !")
            setInput('')

        }
    }

    return (
        <>
            <div className="relative flex items-top justify-center min-h-[500px] mb-30 bg-white sm:items-center sm:pt-0">
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="mt-8 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                                <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight"> Get in touch: </h1>
                                <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">Fill in the form to start a conversation</p>
                                <div className="flex items-center mt-8 text-gray-600">
                                    <p className="w-8 h-8 text-gray-500 text-4xl font-bold"> {<IoLocationOutline />} </p>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">Acme Inc, Street, State, Postal Code</div>
                                </div>

                                <div className="flex items-center mt-4 text-gray-600">
                                    <p className="w-8 h-8 text-gray-500 text-3xl" ><FiPhone /></p>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">+44 1234567890</div>
                                </div>

                                <div className="flex items-center mt-2 text-gray-600">
                                    <p className="w-8 h-8 text-gray-500 text-3xl"><TfiEmail /></p>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">info@acme.org</div>
                                </div>
                            </div>

                            <form onSubmit={onSubmit} className="p-6 flex flex-col justify-center">
                                <div className="flex flex-col">
                                    <label for="name" className="hidden">Full Name</label>
                                    <input type="name" name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none" />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label for="email" className="hidden"> Email </label>
                                    <input ty pe="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none" />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label for="tel" className="hidden">Number </label>
                                    <input type="tel" name="tel" id="tel" placeholder="Telephone Number" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none" />
                                </div>

                                <button type="submit" className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300" > Submit </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact