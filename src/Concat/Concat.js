import React, { useState } from 'react';

const Concat = () => {
    
const [inputText, setInputText] = useState('');

const [concatnatedText, setConcatenatedText] = useState('');

const addText = () =>{
    setConcatenatedText(previnputText=> previnputText+ inputText+ ' ')
    setInputText('')
}


const submitText = () => {


    alert(concatnatedText)
}

    return (
        <>
        
        <h1>Concat</h1>
        <input type='text' placeholder='Enter text' value={inputText} onChange={(e) => setInputText(e.target.value)}/>
       <button onClick={addText}>Add</button>
       <h1>{concatnatedText}</h1>
       <button onClick={submitText}>Submit</button>
        </>
    )
}


export default Concat;