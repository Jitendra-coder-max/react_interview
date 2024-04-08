


import React, { useState } from 'react'

const Hide = () => {

    const [ show, setShow] = useState(true);

    const handleClick = () => {
        setShow(!show)
    }
  return (
    <div>
<button  onClick={ handleClick}>Show/Hide</button>
{
    show ? (<h1>Welcome to React Challenge</h1>): (' ')
}

    </div>
  )
}

export default Hide