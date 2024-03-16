import React,{useState} from 'react';


const Binding = () => {


    const [value,setValue] = useState('');


    const handleChange = (e) => {
        setValue(e.target.value)

    }
return(
   <div>
    <input type="text" placeholder="enter text" value={value} onChange={handleChange}/>
    {/* <p> {value}</p> */}
    <button disabled={value.length>5}>Submit</button>
     </div> 
)
}

export default Binding;