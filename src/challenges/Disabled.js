import React, { useState } from 'react'

const Disabled = () => {

    const [ value, setValue] = useState('')
  return (
    <div>Disabled

        <input type="text" placeholder='enter your name'  value={value} onChange={(e) => setValue(e.target.value)}/>
        <button  disabled={value.length<3}> Click </button>
        {value}
    </div>
  )
}

export default Disabled