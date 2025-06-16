import React, { useEffect, useState } from 'react'

const Weather = () => {

  const [get, setGet] = useState(null)
  const [input, setInput] = useState('')
  // console.log(input)

  
  const apikey = import.meta.env.VITE_API_KEY;


  
  // console.log(input)
  const getwether = (cityName) => {
    const city = cityName || input;

    if (!city) {
      console.log('your city is not difiend');
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
      // const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=1ba6d89ac49886e45aa6026392a243b7&units=metric`
      
      fetch(url)
        .then((res) => res.json())
        .then((response) => {
          console.log(response

          )
          setInput("")
          setGet(response)
        })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getwether("jaipur")
  }, [])

  // console.log(get);


  return (
    <>
      <div className='text-center mt-20 flex justify-center items-center'>
        <div className='bg-white w-auto h-auto p-5 rounded-lg shadow-2xl shadow-blue-700'>
          <h1 className='text-2xl text-black'>Weather App</h1>

          <div className='text-black border-2 rounded-lg px-3 py-0.5 mt-10 ' >
            <input onChange={(e) => setInput(e.target.value)} value={input} className='py-0.5 outline-0' type="text" placeholder='Please Enter Your City' />
            <button type='submit' className='bg-blue-600 p-1 rounded cursor-pointer' onClick={()=>getwether(input)}>Get</button>
          </div>
            {/* <h1>City : {input}</h1> */}
          {get && <div className='text-black'>
            <p className='py-2'>🏙️ City: {get.name}</p>
            <p className='py-2'>🌡️ Temp: {get.main.temp}°C</p>
            <p className='py-2'>💧 Humidity: {get.main.humidity}%</p>
            <p className='py-2'>🔽Pressure: {get.main.pressure} hPa</p>
          </div>}
        </div>
      </div>
    </>
  )
}

export default Weather