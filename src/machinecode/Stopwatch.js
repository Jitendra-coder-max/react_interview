import React, { useRef, useState } from 'react'
import './stopwatch.css'

const Stopwatch = () => {

    const [currentTime, setCurrentTime] = useState(0);
    const [currentState, setCurrentState] = useState('');
    
          const intervalRef =   useRef()

          const startWatch = () => {
            if(currentState === 'START') return 
            setCurrentState('START')
            intervalRef.current = setInterval (()=>{
              setCurrentTime (currentTime => currentTime + 50)
            },50)
          }


const stopWatch = ()=> {
if(currentState === 'STOP') return
setCurrentState('STOP')
clearInterval(intervalRef.current)
}


const resetWatch = () => {

    if(currentState === 'RESET') return
    setCurrentState('RESET')
    setCurrentTime(0)
}

const sec = Math.floor(currentTime/1000)
const min = Math.floor(sec/60)
const hour = Math.floor(min/60)

const seconds = (sec%60).toString().padStart(2,"0")
const minutes = (min%60).toString().padStart(2,"0")
const hours = (hour%60).toString().padStart(2,"0")

// const seconds


  return (
    <div className='stopwatch'>Stopwatch

       <div className='stopwatch-btn'>
        <button onClick={startWatch}>start</button>
        <button onClick={stopWatch}>stop</button>
        <button onClick={resetWatch}>reset</button>
        </div>
        <br/>
        <div className='stopwatch-timer'>
            
            <span>{hours}</span>: <span>{minutes}</span>: <span>{seconds}</span>
        </div>
    </div>
  )
}

export default Stopwatch