import React from 'react'
import { Link } from 'react-router-dom';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { img1, img2 } from './index.js';


export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <div className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="absolute w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src={img1} alt="image1" />
                </div>
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl"> Download Now
                            <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
                        </h2>

                        <Link className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75" to="/" >
                            <IoLogoGooglePlaystore className='text-2xl' /> &nbsp; Download now
                        </Link>
                    </div>
                </div>


            </div>

            <div className='flex justify-around items-center flex-col md:flex-row md:space-y-0 space-y-15'>
                <div>
                    <img className='w-96' src={img1} alt="" />
                </div>
                <div className='text-right space-y-5'>
                    <div>
                        <h1 className='whitespace-nowrap text-5xl font-bold lg:text-5xl sm:text-4xl'>Download Now </h1>
                        <h2 className='text-4xl md:block hidden font-bold'>Lorem Ipsum</h2>
                    </div>
                    <Link to='/' className='inline-flex fw-bold rounded-lg font-medium bg-amber-700 px-6 py-3 items-center justify-center text-white hover:opacity-75'><IoLogoGooglePlaystore className='text-2xl' /> &nbsp; Download Now</Link>
                </div>
            </div>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src={img2} alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
        </div>
    );
}