import React, { useEffect, useState } from 'react'
// localStorage
const Count = () => {

    const [count,setCount] = useState(() =>{
        const storedCount = localStorage.getItem('count');
        return storedCount ? parseInt(storedCount,10) : 3
    } );

    useEffect(() => {
        localStorage.setItem('count',count.toString())
    },[count])
    
  return (
    <div>Count
        

               <button onClick={ () => setCount(count+1)}>Increment</button>
        <button onClick={() => setCount(count-1)}>Decrement</button>

    <h1>{count}</h1>
    </div>
  )
}

export default Count