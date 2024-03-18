import React, { useState } from 'react'
import Child from './Child'
const Parent = () => {

    const [value, setValue] = useState('initial text');
    // const changeName =() => {
    //   setValue("after text change")
    // }


  const changeName = (value) => {
    setValue(value)
  }

  return (
    <div>Parent
           {/*  {value}*/}
{/*   <Child  setVal={setValue}/> */}

<Child  value={value}  onChange={changeName}/>

{ /*<button onClick={() => setValue(' after text')}> Click here</button> */}
    </div>
  )
}

export default Parent

// updating parent from child