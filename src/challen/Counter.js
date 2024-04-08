import React,{useState,useRef} from 'react'

const Counter = () => {

    // const [counter, setCounter] = useState(5);

    let countRef = useRef(0);

    function handleIncrement() {
      countRef.current = countRef.current + 1;
      console.log(countRef.current)
    }
  return (
    <div>Counter

<span>Count: {countRef.current}</span>
    <button onClick={handleIncrement}>
      Click me
    </button>

{/* <span>{counter}</span>
      <button onClick={() => {
        setCounter(counter + 5);
        setCounter(counter + 5);
        alert(counter);
        setCounter(counter + 5);
        setCounter(counter + 5);
      }}>Increment</button> */}
 {/* <span>{counter}</span>
      <button onClick={() => {
        setCounter(counter => counter + 5);
        setCounter(counter => counter + 5);
        alert(counter);
        setCounter(counter => counter + 5);
        setCounter(counter => counter + 5);
      }}>Increment</button> */}

    </div>
  )
}

export default Counter