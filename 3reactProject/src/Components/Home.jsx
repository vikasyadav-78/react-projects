import React from 'react'
import { Link } from 'react-router-dom'
import ProductCart from './ProductCart'
import Header from './Header'

function Home(props) {
    return (
        <>
            {/* <Header /> */}
            <div>
                <ProductCart logout={props.logout} />
            </div>
        </>
    )
}

export default Home
