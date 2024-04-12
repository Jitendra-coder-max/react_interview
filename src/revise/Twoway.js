import React,{useState} from 'react'

const Twoway = () => {

    const [inputValue,setInputValue] = useState('');
    const handleChange =(e) => {
 setInputValue(e.target.value)
    }

  return (
    <div>Twoway
    <input  type="text"  name="name" placeholder='enter text' onChange={handleChange}/>
    {inputValue}
    </div>
  )
}

export default Twoway