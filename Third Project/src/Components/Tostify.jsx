import React from 'react'

function Tostify(props) {
  return (
    <>
        <div className='w-40 bg-red-400 rounded-lg toastStyles'>
            <p className=''>{props.toast} </p>
        </div>
        {/* <div className='w-40 bg-blue-500 rounded-lg toastStyles'>
            <p className=''>{props.toast} </p>
        </div>
        <div className='w-40 bg-blue-500 rounded-lg toastStyles '>
            <p className=''>{props.toast} </p>
        </div>
        <div className='w-40 bg-blue-500 rounded-lg toastStyles'>
            <p className=''>{props.toast} </p>
        </div> */}
    </>
  )
}

export default Tostify
