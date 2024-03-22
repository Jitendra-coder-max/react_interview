// import React, { useState } from 'react';
// // import './Checklist.css';

// const Checklist = () => {
//   const [checkboxes, setCheckboxes] = useState([
//     { id: 1, label: 'Dogs', checked: false },
//     { id: 2, label: 'Cats', checked: false },
//     { id: 3, label: 'Cows', checked: false },
//     { id: 4, label: 'Deers', checked: false },
//   ]);

//   const handleCheckboxChange = (id) => {
//     const updatedCheckboxes = checkboxes.map(checkbox =>
//       checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
//     );
//     setCheckboxes(updatedCheckboxes);
//   };

//   const handleSelectAll = () => {
//     const updatedCheckboxes = checkboxes.map(checkbox => ({ ...checkbox, checked: true }));
//     setCheckboxes(updatedCheckboxes);
//   };

// //   const allChecked = checkboxes.every(checkbox => checkbox.checked);

//   return (
//     <div className="checkbox-list">
      
//       {checkboxes.map(checkbox => (
//         <label key={checkbox.id}>
//           <input
//             type="checkbox"
//             checked={checkbox.checked}
//             onChange={() => handleCheckboxChange(checkbox.id)}
//           />
//           {checkbox.label}
//         </label>
//       ))}
//       <button onClick={handleSelectAll}>Select All</button>
//     </div>
//   );
// };

// export default Checklist;






import React ,{useState}from 'react'

const Checklist = () => {
 

    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: 'Dogs', checked: false },
        { id: 2, label: 'Cats', checked: false },
        { id: 3, label: 'Cows', checked: false },
        { id: 4, label: 'Deers', checked: false },
      ]);

      const handleChange = (id) => {

        const updateCheckboxes= checkboxes.map((checkbox) => (
            checkbox.id === id ? {...checkbox, checked : !checkbox.checked} : checkbox
        ));
        setCheckboxes(updateCheckboxes)

      }


      const handleClick = () => {

        const updatedCheckboxes = checkboxes.map(checkbox => ({ ...checkbox, checked: true }));
        setCheckboxes(updatedCheckboxes);

      }




  return (
    <div>Checklist

       <ul >

        {checkboxes.map((checkbox) => (
            <li key ={checkbox.id}>
                <input  type="checkbox"    checked={checkbox.checked }  onChange={ () =>handleChange(checkbox.id)}/>
                {checkbox.label}</li>
        ))}
       </ul>

       <button onClick={handleClick}>Select all</button>

    </div>
  )
}

export default Checklist
