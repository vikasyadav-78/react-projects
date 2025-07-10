import React, { useEffect, useState } from 'react'
import { TiUpload } from 'react-icons/ti'

const Github = () => {

    const [data, setdata] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        fetch('https://api.github.com/users/vikasyadav-78')
            .then(response => response.json())
        
          .then((value)=>{
            setdata(value)
            setLoading(false)
          }).catch((err)=>{
            console.log(err) 
            setLoading(false)
        })
    }, [])

console.log(data);
  
  if (loading) return <p>Loading...</p>

  if (!data) return <p>Error loading data.</p>

  return (
    <>
      <p>{data.login}</p>
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github followers: {data.followers}
        <div>
          <img src={data.avatar_url} alt="GitHub avatar" width={200} />
        </div>
      </div>
    </>
  )
}

export default Github




