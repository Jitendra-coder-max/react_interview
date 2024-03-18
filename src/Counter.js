import React, { useState } from 'react';


const Counter = () => {

    const [count,setCount] = useState(0)

    const increment =() => {
        setCount(count+1)
    }

    const decrement = () => {

        setCount(count-1)

    }

    const reset = () => {
        setCount(0);
      };

    return (
        <div>
           <button onClick={increment} disabled={count>10}> Click here</button>
           <button onClick={decrement}  disabled={count<1}> decrement</button>
           <button onClick={reset}>Reset</button>
           <h1>{count}</h1>
        </div>
    )
}


export default Counter;