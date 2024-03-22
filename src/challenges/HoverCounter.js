import React, { useState } from 'react'

const HoverCounter = () => {
    const [ count, setCount] = useState(0)
  return (
    <div>HoverCounter


        <button onMouseEnter={() => setCount(count+1)}>Hover me</button>

      <h1>  {count}</h1>
    </div>
  )
}

export default HoverCounter