import React from 'react'

function Tostify(props) {
  return (
    <>
        {props.toast==='You are login'  ? <div className='w-40 bg-blue-600 rounded-lg toastStyles'>
            <p className=''>{props.toast} </p>
        </div> : <div className={`w-auto bg-red-500 rounded-lg toastStyles`}>
            <p className=''>{props.toast} </p>
        </div>}
    
    </>
  )
}

export default Tostify
