import React from 'react';



const DisArr = () => {
    const users = [
        { name: "John Doe", id: 1 },
        { name: "Jane Doe", id: 2 },
        { name: "Billy Doe", id: 3 }
      ];

    return(
        <div>
       <ol>
      {
        users.map((user) => <li key={user.id}>{user.name}</li>)
      }
       </ol>
        </div>
    )
}


export default DisArr;