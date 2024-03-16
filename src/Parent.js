import React, { useState } from 'react'
import Child from './Child'
const Parent = () => {

    const [value, setValue] = useState('initial text')

  return (
    <div>Parent
          {value}
<Child  setVal={setValue}/>
    </div>
  )
}

export default Parent

// updating parent from child