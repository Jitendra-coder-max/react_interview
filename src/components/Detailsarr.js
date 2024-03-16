import React from 'react'

export const Detailsarr = () => {

    const numbers = [1,23,4,5,6,7,8,8];
    const details = [
        {
            
            id: 1,
            name:"Nishant",
        age: 26}
        ,
        {
            id: 2,
            name: "Nisha",
            age: 27
        },
        {
            id: 3,
            name: "Niraj",
            age: 28
        },
        {
            id: 4,
            name: "Nishad",
            age: 29
        }
    ]
  return (
    // <div>Detailsarr
    
    
    // <ul>
    //   {numbers.map((number,index) => (
    //              <li key ={index}> {number}</li>
    //   ))}
    //  </ul>
       
    
    // </div>



       <div> Detailsarr


        <ul>
        {
            numbers.map((number, index) => {
                return (
                    <li key={index}>
                <h1>{number}</h1>
                </li>)
            })
        }
     </ul>



         <div>{

            details.map((detail) => {
                return (
                    <li key={detail.id}> 
                    
                    <h1>{detail.name}</h1>
                        <h1>{detail.age}</h1></li>
                )
            })
         }
         
         </div>
    </div >
  )
}
