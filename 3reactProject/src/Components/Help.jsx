import React from 'react'

export default function Help() {
    return (
        <>
            <div className='text-start flex justify-between'>
                <div>
                    <h1 className='text-2xl font-bold'>Hello... User</h1>
                </div>
                <div className='flex gap-10'>
                    <Link className='font-semibold' to='/'>Home</Link>
                    <Link className='font-semibold' to='/about'>About</Link>
                    <Link className='font-semibold' to='/contact'>Contact</Link>
                    <Link className='font-semibold' to='/help'>Help</Link>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}
