import React, { useState,useEffect } from 'react';
import './Fetch.css'
const Fetchdata = () => {


    const [users, setUsers] = useState([]);


    useEffect(() => {

       const fetchApi = async() => {

           const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
           const data =  await res.json();
           setUsers(data)

        
       }

       fetchApi();
      console.log(users)
    },[])

    // const mapData = () => {

    //     const mappedArr =  users.map((user) => (user.id)*2)

    //     console.log(mappedArr)
    // }


    // const mapData = () => {

    //     const filtered = users.filter((user) => (
    //         // user.email == "Sincere@april.biz"
    //         // user.name.toLowerCase().includes('a')
    //         user.id>5
    //     ))
    //     console.log(filtered)
    // }


    const mapData = () => {

        const filtered = users.filter((user) => (
            user.id > 5
        ))
        setUsers(filtered)
        console.log(filtered)
    }



    return(
        <div>

            <button onClick={mapData} className="multy-id"> Multiplay ID</button>

        <div className="container">
        {
            users.map((user) => (
                 <div  className="user-box" key={user.id}>
                 <p>{user.name}</p>
                 <p>{user.email}</p>
                 </div>
            ))
        }
  
            </div>

            
</div>
    )
}

export default Fetchdata;