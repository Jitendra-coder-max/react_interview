// import React from 'react'

// const Child = ({setVal}) => {
//   return (
//     <div>Child

//         <button onClick={() => setVal("after clicking")}>click here</button>
//     </div>
//   )
// }

// export default Child


import React from 'react'

const Child = ({ value, onChange }) => {
  return (
    <div>Child
    
    {value}

   {/*<button onClick={onChange}> Click here</button> */} 

   <button onClick={() => onChange("new Text")}> Click here</button>  // child to parent data pass
    
    </div>
  )
}

export default Child