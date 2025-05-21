import React from 'react'

export default function Cart(props) {

    const removeItem = (id) => {
        let updateCard = props.add.filter((item) => {
            return item.id !== id;
        })
        props.setadd(updateCard)
    }

    const totalAmount = props.add.reduce((pre, cur) => pre + parseFloat(cur.price.replace(/,/g, "")), 0)
    let displayPrice = totalAmount.toLocaleString("en-IN")


    // const color = () => {
    //     if (props.mode === "light") {
    //         document.body.style.backgroundColor = "white";
    //         document.body.style.color = "black";
    //         props.setmode("dark")
    //     }
    //     else {
    //         document.body.style.backgroundColor = "black";
    //         document.body.style.color = "white";
    //         props.setmode("light");
    //     }
    // }

    return (
        <>
            <div className={props.mode === "light" ? 'flex flex-col gap-20 border-b w-100 max-h-85 bg-black text-white overflow-y-auto no-scrollbar relative' : 'flex flex-col gap-20 border-b w-100 max-h-85 bg-white text-black overflow-y-auto no-scrollbar relative'}>
                {props.add.map((items) => <div>
                    <div className='flex justify-between items-center p-3'>
                        <div>
                            <img className='object-cover' width={"60%"} src={items.img} alt="" />
                            <h1 className='font-bold text-start mt-3'>Name : {items.name}</h1>
                            <h1 className='font-bold text-start'>Price : ₹ {items.price}</h1>
                        </div>
                        <button onClick={() => removeItem(items.id)} className='font-bold border p-1 px-3 buttonCart'>X</button>
                    </div>
                </div>
                )}
                <div className='flex gap-7  border-t-1 py-2'>
                    <h1 className='font-bold'>Total : </h1>
                    <p className='font-bold'> ₹ {displayPrice}</p>
                </div>
            </div>
        </>
    )
}
