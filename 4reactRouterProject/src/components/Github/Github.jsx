import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    return (
        <>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers:
                {/* {data.followers} */}
                <img src={data.avatar_url} alt="Git picture" width={300} />
                <img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" alt="" />
            </div>

        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}