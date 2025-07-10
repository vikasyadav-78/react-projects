import React, { useEffect, useState } from 'react'
import { TiUpload } from 'react-icons/ti'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

  const data = useLoaderData()

  return (
    <>
      {/* <p>{data.login}</p> */}
      <div className='m-4 bg-gray-600 text-white p-4  grid lg:grid-cols-2 sm:grid-cols-1'>
        <div>
          <img className='rounded-lg' src={data.avatar_url} alt="Git picture" style={{width : "50%"}} />
        </div>
        <div className='text-start text-2xl font-semibold py-10'>
          <p className='py-1'>Username :- {data.login}</p>
          <p className='py-1'>Github followers :- {data.followers}</p>
          <p className='py-1'>Github folloing :- {data.following}</p>
          <p className='py-1 pb-1'>Github public_repos :- {data.public_repos}</p>
          <a className='' href='https://github.com/vikasyadav-78'>Link :- {data.url}</a>
        </div>
      </div>
    </>
  )
}

export default Github


export const githubFolder = async () => {
  const response = await fetch('https://api.github.com/users/vikasyadav-78')
  return response.json()
}


