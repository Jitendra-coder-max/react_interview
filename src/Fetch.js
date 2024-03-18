import React, { useEffect, useState } from 'react'

const Fetch = () => {

    // https://jsonplaceholder.typicode.com/users

    const [users,setusers] = useState([])

    useEffect(() => {

     const fetchApi = async() => {
                  const res =  await fetch(`https://jsonplaceholder.typicode.com/users`)
                   const data =  await res.json()
                   setusers(data)
     }
     fetchApi();
  console.log(users)
    },[])
  return (
    <div>Fetch


        <ul>{ users.map((user) =>(
            <li key={user.id}>
               <h1>Name : {user.name}</h1>
               <h1>address : {user.address.street}</h1>
            </li>
        ))
            
            }</ul>
    </div>
  )
}

export default Fetch