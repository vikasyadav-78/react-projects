import React from 'react'
import { Link } from 'react-router-dom';
import { TiSocialFacebook } from "react-icons/ti";
import { FaDiscord, FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" className="mr-3 h-16" alt="Logo" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">About</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/hiteshchoudhary" className="hover:underline" target="_blank" rel="noreferrer"> Github </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">Discord</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">Terms & Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2023
                        <a href="https://hiteshchoudhary.com/" className="hover:underline">Vikasyadav</a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 items-center sm:justify-center sm:mt-0">
                        <Link to="#" className="text-gray-500 hover:text-gray-900  duration-300"><TiSocialFacebook className='text-xl' />
                        </Link>
                        <Link to="#" className="text-gray-500 hover:text-gray-900 duration-300">
                            <FaDiscord className='text-xl' />
                        </Link>
                        <Link to="#" className="text-gray-500 hover:text-gray-900 duration-300">
                            <FaTwitter className='text-xl' />
                        </Link>
                        <Link to="#" className="text-gray-500 hover:text-gray-900 duration-300">
                            <FaGithub className='text-xl'/>
                        </Link>
                        <Link to="#" className="text-gray-500 hover:text-gray-900 duration-300">
                            <FaDribbble className='text-xl' />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}