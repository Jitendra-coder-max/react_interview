import React, { useState } from 'react'
import './Folder.css'
const Folder = ({dir}) => {

    const [show, setShow] = useState(false)
    console.log(dir)

if(dir.type==='folder'){
  return (
    <div onClick={(e) => {
        setShow(!show);
        e.stopPropagation()
        
    }}>

        <span className='folder'>📁{dir.name}</span>
        <div style ={{ display: `${show ? 'block' :'none'}`}}>
            {dir.items.map((val,index) => (
                <Folder key={index} dir={val}/>
            ))}
        </div>
    </div>
  )
}
    else {

        return <span className='file'>🗄{dir.name}</span>
    }
  
}

export default Folder