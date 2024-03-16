import React, { useState } from 'react'

const Sumtwo = () => {

    const [number1, setNumber1] = useState();
    const [number2, setNumber2] = useState();
    const [total,setTotal] = useState(0);

const handleSubmit = () => {
     setTotal(parseInt(number1)+parseInt( number2));
// setTotal(number1+number2)
}

// +e.target.value to make text value into number
  return (
    <div>Sumtwo

<input  type="number" placeholder='enter number 1' value={number1}  onChange={(e) =>setNumber1( e.target.value)}/>
        <input  type='number' placeholder='enter number 2' value={number2} onChange={(e) => setNumber2(e.target.value)}/>

        {/* <input  type="text" placeholder='enter number 1' value={number1}  onChange={(e) =>setNumber1( +e.target.value)}/>
        <input  type='text' placeholder='enter number 2' value={number2} onChange={(e) => setNumber2(+e.target.value)}/> */}
        <button onClick={handleSubmit}> Click here</button>

        <h1> Total: {total || ''}</h1>
    </div>
  )
}

export default Sumtwo;