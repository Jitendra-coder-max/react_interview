import React from 'react'

const Clickbtn = () => {

    const handleClick = () => {
        console.log(` you clicked the button`)
    }
  return (
    <div>Clickbtn

        <button onClick={handleClick}> Click me</button>
    </div>
  )
}

export default Clickbtn