
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <>
           <header className='shadow sticky z-50 top-0'>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                    <div className='flex flex-wrap items-center justify-between w-auto max-w-screen-xl'>
                        <Link to='/' className='flex items-center'>
                            <img className='mr-3 h-12' src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="Logo" />
                        </Link>
                        <div className='flex items-center lg:order-2'>
                            <Link to='#' className='font-medium text-sm mr-2 py-3 px-5'>Log in</Link>
                            <Link to='#' className='font-medium text-sm bg-orange-700 hover:bg-orange-800 px-5 py-2.5 rounded-lg text-white mr-2'>Get Started</Link>
                        </div>
                        <div className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1' id="mobile-menu-2">
                            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:gap-8 lg:mt-0' >
                                <li>
                                    <NavLink to='/' className={({isActive}) => `pr-4 pl-3 py-2 block border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${isActive ? "text-orange-700" : "text-gray-700"}`} >Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/about' className={({isActive}) => `pr-4 pl-3 py-2 block border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${isActive ? "text-orange-700" : "text-gray-700"}`}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/contact' className={({isActive}) => `pr-4 pl-3 py-2 block border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${isActive ? "text-orange-700" : "text-gray-700"}`}>Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/github' className={({isActive}) => `pr-4 pl-3 py-2 block border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${isActive ? "text-orange-700" : "text-gray-700"}`}>Github</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    );
}
