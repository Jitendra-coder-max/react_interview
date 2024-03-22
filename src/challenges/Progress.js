import React from 'react'
import './Progress.css'
const Progress = ({percent= 12}) => {


  return (
    <div>Progress
        <div className='progress-bar-container'>
           
 <div className='progress-bar' style={{width: `${percent}%`}}>  </div>
            
        </div>
    </div>
  )
}

export default Progress