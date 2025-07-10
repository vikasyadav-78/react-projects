import React from 'react'
import Button from '../ui/Button'

const Card = () => {
  return (
    <div style={{
        border:"1px solid red",
        borderRadius:"10px",
        display:'flex'
    }}>
        <div>
            <img src="https://images.unsplash.com/photo-1751517298236-b9150faa3dfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" alt=""  style={{width:"300px"}}/>
        </div>
        <div>
            <Button z={"Youtube"} url={"https://www.youtube.com/"}/>
        </div>


    </div>
  )
}

export default Card