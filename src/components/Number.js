import React,{useEffect, useState} from 'react'
import './Fetch.css'
const Number = () => {

    const [numbers,setNumbers] = useState([1,2,3,4,5,6,7,8])

    const numData = () => {

      const  filterArr = numbers.filter((number) => (
          number>2
        )).map((filtered) => filtered * filtered)

        setNumbers(filterArr)
        console.log(filterArr)
    }
  return (
    <div><div  className='container'>

{numbers.map((number,index) => (
    <div key={index} className='user-box'> {number}</div>
))}
    </div>

    <button onClick={numData}> click here</button>
     </div>
  )
}

export default Number