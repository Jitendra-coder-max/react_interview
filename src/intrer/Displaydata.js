import React, { useState } from "react";
import './Displaydata.css'
const Displaydata = () => {
  let initialData = [
    { id: 1, username: "Jon" },
    { id: 2, username: "Herry" },
    { id: 3, username: "Tom" },
    { id: 4, username: "Justin" },
  ];

  const [users, setUsers] = useState(initialData);


//   const handleDelelte = (userid) => {
//     // console.log("delS")
//       const delUser =     users.filter((user) => user.id !==userid);
//       console.log(delUser)
//       setUsers(delUser)
//   }



const handleDelelte = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    // console.log(updatedUsers)
    setUsers(updatedUsers);
  };
  return (
    <>
    
      <div className="conatiner">
        {users.map((user) => {
          return (
            <div key={user.id}>
             
              <h1>  {user.id}: {user.username}
              <button onClick={() =>handleDelelte(user.id)}> Delete</button></h1>
            </div>
          );
        })}


        
      </div>
    </>
  );
};

export default Displaydata;
