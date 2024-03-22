// // NumberBoxGenerator.js

// import React, { useState } from 'react';
// import './Box.css'
// const Box = () => {
//   const [numBoxes, setNumBoxes] = useState(0);
//   const [boxes, setBoxes] = useState([]);

//   const handleInputChange = (e) => {
//     // const value = parseInt(e.target.value, 10);
//     // setNumBoxes(value);
//     setNumBoxes(e.target.value);
//   };

//   const handleGenerateBoxes = () => {
//     const newBoxes = Array.from({ length: numBoxes }, (_, index) => index + 1);
//     setBoxes(newBoxes);
//   };

//   return (
//     <div>
//       <input
//         type="number"
//         placeholder="Enter a number"
//         value={numBoxes}
//         onChange={handleInputChange}
//       />
//       <button onClick={handleGenerateBoxes}>Generate Boxes</button>

//       <div className="box-container">
//         {boxes.map((boxNumber) => (
//           <div key={boxNumber} className="box">
//             Box {boxNumber}
//           </div>
//         ))}
//       </div>

      
//     </div>
//   );
// };

// export default Box;













import React, { useState } from 'react'
import './Box.css'
const Box = () => {

    const [numBoxes,setNumBoxes] = useState(0)
    const [boxes, setBoxes] = useState([])
    
    console.log(numBoxes)

    const handleClick = () => {

        if(numBoxes<0){
            alert("postitive number")
        }
        else if(numBoxes>50){
            alert("enter lessthan 50")
        }
        else{

               const newBox =    Array.from({length:numBoxes}, (_,index) => index+1)
               setBoxes(newBox)
        }
    }

  return (
    <div>Box
 

  <input  type="number" placeholder='Enter number'  value={numBoxes} onChange={(e) =>  setNumBoxes(parseInt(e.target.value))}/>

  <button onClick={handleClick}> Click here</button>

  <div className='container'>
    {
        boxes.map((box, index) => (
            <div key ={index} className="box">{box} </div>
        ))
    }

  </div>


    </div>
  )
}

export default Box
