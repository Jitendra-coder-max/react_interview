import React, { useEffect, useState } from 'react'
import Count from './components/Count'
// 2 COUNTER 1st move by 1 second 1.5 
const Counterinterval = () => {

const [count,setCount] = useState(0)


useEffect(()=> {

  const interval =   setInterval(() => {
 if(count<50){
        setCount(count+1)
 }
    },1000)

    return () => {
        clearInterval(interval)
    }

})

  return (
    <div>Counterinterval
        <h1>{count}</h1>
        <h1>{count/2}</h1>
    </div>
  )
}

export default Counterinterval