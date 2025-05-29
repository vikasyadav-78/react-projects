import React from 'react'

function Tostify(props) {
  return (
    <>
        <div className='flex justify-end '>
            <p className='bg-green-500 w-auto  px-4 rounded-lg'>{props.toast} </p>
        </div>
    </>
  )
}

export default Tostify
