import React from 'react'

const Button = (props) => {
  return (
    <a href={props.url} style={{
        background:"#000",
        color:"#fff",
        padding:"20px 30px",
        border:"none",
        borderRadius:"20px"
    }}>
       {props.titlt} 
    </a>
  )
}

export default Button