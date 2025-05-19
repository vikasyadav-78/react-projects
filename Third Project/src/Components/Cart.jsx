import React from 'react'

export default function Cart(props) {

    const removeItem = (id) => {
        let updateCard = props.add.filter((items) => {
            return items.id !== id;
        })
        props.setAdd(updateCard)
    }


    

    return (
        <>
            <div className='flex flex-col gap-20 border-b  w-100 max-h-85 bg-white overflow-y-auto no-scrollbar relative'>
                {props.add.map((items) => <div>
                    <div className='flex justify-between items-center p-3'>
                        <img className='object-cover' width={"50%"} src={items.img} alt="" />
                        <h1 className='font-bold'>{items.name}</h1>
                        <h1 className='font-bold'>{items.price}</h1>
                        <button onClick={() => removeItem(items.id)} className='font-bold border p-1 px-3 buttonCart'>X</button>
                    </div>
                </div>
                )}
            </div>
        </>
    )
}
