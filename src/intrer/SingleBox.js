import React, { useState } from 'react'
// import '//SingleBox.css'
import './boxs.css'

const SingleBox = () => {

    const [boxes,setboxes] = useState([])

    const handleClick = () => {
        const newBox = {
            id: Math.random().toString(),
        }

        setboxes((preBox) =>[...preBox,newBox])

    }
    
  return (
    <div>SingleBox
   <button onClick={handleClick}> Click</button>
<div id ="main">

{
    boxes.map((box) => (
        <div  key={box.id} className='Box'> </div>

    ))
}
</div>
             
    </div>
  )
}

export default SingleBox