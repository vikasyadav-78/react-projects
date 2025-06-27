import React from 'react'
import { Outlet } from 'react-router-dom'

function Navbar() {
    return (
        <>

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Navbar
