import React from 'react'
import { Link } from 'react-router-dom'
import ProductCart from './ProductCart'

function Home(props) {
    return (
        <>
            
            <div>
                <ProductCart logout={props.logout} />
            </div>
        </>
    )
}

export default Home
