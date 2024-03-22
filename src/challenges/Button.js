import React, { useState } from 'react'
import './Button.css'
const Button = () => {

    const [show, setShow] = useState(false)

    const toggle = (text) => {
        setShow(!show)
    }
  return (
    <div>Button


        <button onMouseEnter={() => toggle(true)}
         onMouseLeave={() => toggle(false)}  style={{backgroundColor: show ? 'skyblue' : 'orange'  }}>click here</button>
    </div>
  )
}

export default Button