import React, { useState } from 'react';



const Ager = () => {

const [age,setAge] = useState(0);
const [error, setError] = useState('')

const handleChange = (e) => {
    // setAge(e.target.value)
     const inputAge =   e.target.value;
     setAge(inputAge)

     if(inputAge <0 || inputAge>100){
        setError('plz enter valid age')
     }
     else{
        setError('')
     }

}


    return (
        <div>Age
            <input type="number" name="number" placeholder='enter your age' value={age} onChange={ handleChange}  />
            {age}
            {error && <p style={{color:'red'}}>{error}</p>}
        </div>
    )
}


export default Ager;