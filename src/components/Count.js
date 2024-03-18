import React,{useState} from 'react'

const Count = () => {

    const [count,setCount] = useState(0);
  const [name,setName] = useState('');
  const [isVisible,setIsVisible] = useState(true);

//   const [array,setArray] = useState([1,2,3,4,5,6,7])
    const [array, setArray] = useState([{name: 'Nishant', age: 26},
        { name: 'Jit', age: 25 }])

        const [object,setObject] = useState({name:"Jit", age:25})


    const increment = () => {
        // setCount(prev => prev+1)
        setIsVisible(!isVisible)
    }
  return (
    <div>Count
     <button onClick={increment}> increment</button>

     <h1>{count}</h1>
   {isVisible && <p> text ius visible</p>}
    </div>
  )
}

export default Count