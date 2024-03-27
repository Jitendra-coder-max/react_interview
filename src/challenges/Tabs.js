// import React, { useState } from 'react';

// const Tabs = () => {
//   const [activeTab, setActiveTab] = useState('person');

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const person = {
//     name: 'John Doe',
//     age: 32,
//     occupation: 'Developer'
//   };

//   const address = {
//     street: '1234 Main St',
//     city: 'San Francisco',
//     state: 'CA',
//     zip: '94107'
//   };

//   return (
//     <div>
//       <div>
//         <button
//           data-testid="person-tab"
//           onClick={() => handleTabClick('person')}
//         //   style={{ fontWeight: activeTab === 'person' ? 'bold' : 'normal' }}
//         >
//           Person
//         </button>
//         <button
//           data-testid="address-tab"
//           onClick={() => handleTabClick('address')}
//         //   style={{ fontWeight: activeTab === 'address' ? 'bold' : 'normal' }}
//         >
//           Address
//         </button>
//       </div>
//       <div>
//         {activeTab === 'person' && (
//           <div data-testid="person-container">
//             <h2>Person Information</h2>
//             <p>Name: {person.name}</p>
//             <p>Age: {person.age}</p>
//             <p>Occupation: {person.occupation}</p>
//           </div>
//         )}
//         {activeTab === 'address' && (
//           <div data-testid="address-container">
//             <h2>Address Information</h2>
//             <p>Street: {address.street}</p>
//             <p>City: {address.city}</p>
//             <p>State: {address.state}</p>
//             <p>ZIP: {address.zip}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Tabs;


// import React, { useState } from 'react'

// const Tabs = () => {
// const [ activeTab, setActiveTab] = useState('person')
//     const person = {
//         name: 'John Doe',
//         age: 32,
//         occupation: 'Developer'
//       };
      
//       const address = {
//         street: '1234 Main St',
//         city: 'San Francisco',
//         state: 'CA',
//         zip: '94107'
//       };


//       const handleClick = (tab) => {
//         setActiveTab(tab);
//       }
//   return (
//     <div>
//         <div>
//             <button onClick={() => handleClick('person')}>
//                 Person
//             </button>
//             <button  onClick={() => handleClick('address')} >
//                 Address
//             </button>
//         </div>
//         <div>
//              { activeTab === 'person' && (
//                 <div>
//                     <h1>Person Information</h1>
//                     <p>Name : {person.name}</p>
//                     <p>Age: {person.age}</p>
//                     <p>Occupation {person.occupation}</p>
//                 </div>
//             ) } 
 
//             {activeTab === 'address'   && (
//                 <div> 
//                     <h1> Address Information</h1>
//                     <p>Street: {address.street}</p>
//                     <p>City: {address.street}</p>
//                     <p>State: {address.state}</p>
//                     <p>Zip : {address.zip}</p>
//                 </div>
//             )} 


//         </div>

//     </div>
//   )
// }

// export default Tabs


import React, { useState } from 'react'

const Tabs = () => {
const [ activeTab, setActiveTab] = useState('person')
    const person = {
        name: 'John Doe',
        age: 32,
        occupation: 'Developer'
      };
      
      const address = {
        street: '1234 Main St',
        city: 'San Francisco',
        state: 'CA',
        zip: '94107'
      };


      const handleClick = (tab) => {
        setActiveTab(tab);
      }
  return (
    <div>
        <div>
            <button onClick={() => handleClick('person')}>
                Person
            </button>
            <button  onClick={() => handleClick('address')} >
                Address
            </button>
        </div>
        <div>
           {
            activeTab === 'person' ? (<div>
                <h1> User Information</h1>
                <p>Name:{person.name}</p>
                <p>AGE: {person.age}</p>
                <p> Occupation {person.occupation}</p>
                 </div>) : (<div>
                    
                    <h1>Address detail</h1>
                    
                    <p> street: {address.street}</p>
                    <p> City: {address.street}</p>
                    <p> State: {address.city}</p>
                    <p> Zipcode:{address.zip}</p>
                    </div>)
           }


        </div>

    </div>
  )
}

export default Tabs
