import React, { useState } from 'react'

const Celcius = () => {

    const [num, setNum] = useState();
    const handleChange = (e) => {
        setNum(parseInt(e.target.value))
    }
        const convertToKelvin = (num) => {
            return parseFloat(num) + 273.15;
          };
        
          const converToFahrenheit = (num) => {
            return  ( parseFloat(num)*9/5)+32
          }

    

    
  return (
    <div>Celcius
        <input  type="number" placeholder='enter number'  value={num} onChange={handleChange}/>°C
        <br/>
        <p>{num}°C is {convertToKelvin(num)}K is {converToFahrenheit(num)}°F</p>
    </div>
  )
}

export default Celcius