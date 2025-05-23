import React, { useState } from 'react'



export default function LikeunLikeCommet() {
    const [first, setfirst] = useState(second)
  return (
    <>
        <div className='flex gap-20'>
            <div className='flex gap-2'>
                <button>Like</button>
                <p>count</p>
            </div>
            <div className='flex gap-2'>
                <button>reset</button>
            </div>
            <div className='flex gap-2'>
                <button>DisLike</button>
                <p>count</p>
            </div>
        </div>
    </>
  )
}
