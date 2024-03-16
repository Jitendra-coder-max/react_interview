import React from 'react'

const Child = ({setVal}) => {
  return (
    <div>Child

        <button onClick={() => setVal("after clicking")}>click here</button>
    </div>
  )
}

export default Child