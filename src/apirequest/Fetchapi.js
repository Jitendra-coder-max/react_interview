// import React, { useState,useEffect } from 'react'
// import axios from 'axios';

// const Fetchapi = () => {
// const [users, setUsers] = useState([]);
//   const [newUser, setNewUser] = useState({ name: '', username: '', email: '' })

// useEffect(() => {
    
//     const FetchData = async() => {

//         // const res = await fetch(`https://jsonplaceholder.typicode.com/users`)

//         const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
//         // const data = await res.json();
//         setUsers(res.data)
//         // console.log(users)
//     }
//     console.log(users)
//     FetchData();

// },[])


// const deleteUser = async(id) => {

//    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
//    setUsers(users.filter(user => user.id !==id))
// }

// const addData = async () => {

//   // const res = await axios.post(`https://jsonplaceholder.typicode.com/users`,{
//   //   name: "Jitendra",
//   //   username: "jittu1234",
//   //   email: "nishadji1245@gmail.com"
//   // }) static data


//   const res = await axios.post(`https://jsonplaceholder.typicode.com/users`, newUser)
//    setUsers([...users, res.data])
//    setNewUser({name: ' ', username: ' ', email:' '})

// }


// const handleChange = (e) => {

//   setNewUser({...newUser,[e.target.name]: e.target.value})
//   console.log(newUser)
//   // setNewUser(prevNewUser => ({...prevNewUser,[e.target.name]:e.target.value}))
// }

//   return (
//     <div>Fetchapi
    
//     <table border={1}>
//      <tr> 
//      <th>Name</th>
//           <th>UserNmae</th>
//           <th>email</th>
//      </tr>
//      {users.map((user) => (
//       <tr key ={user.id}>
//       <td>{user.name}</td>
//          <td>{user.username}</td>
//          <td>{user.email}</td>
//          <td> <button onClick={() => deleteUser(user.id)}>Delete</button></td>
//       </tr>
//      ))}
    
//     </table>
//     <br/>
//     <button onClick={addData}> Post data</button>
//       <br />

//     <label>Name</label>
//     <input  text="type" name="name" placeholder='enter name' value={newUser.name} onChange={handleChange}/>
//       <br />
//       <label >UserNmae</label>
//       <input text="type" name="username" placeholder='enter user name' value={newUser.username} onChange={handleChange} />
//       <br />
      
//       <label >Emailid</label>
//       <input text="type" name="email" placeholder='enter email'  value ={newUser.email} onChange={handleChange} />
//     </div>
//   )
// }

// export default Fetchapi





import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Fetchapi = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ id: null, name: '', username: '', email: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      setUsers(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const addData = async () => {
    try {
      const res = await axios.post(`https://jsonplaceholder.typicode.com/users`, newUser);
      setUsers([...users, res.data]);
      setNewUser({ id: null, name: '', username: '', email: '' });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const updateUser = async () => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/users/${newUser.id}`, newUser);
      const updatedUsers = users.map(user =>
        user.id === newUser.id ? newUser : user
      );
      setUsers(updatedUsers);
      setNewUser({ id: null, name: '', username: '', email: '' }); // Reset input fields after update
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleUpdate = (id) => {
    const userToUpdate = users.find(user => user.id === id);
    setNewUser(userToUpdate);
  };

  return (
    <div>
      <h2>User List</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
                <button onClick={() => handleUpdate(user.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add User</h2>
      <label>Name:</label>
      <input type="text" name="name" value={newUser.name} onChange={handleChange} />
      <label>Username:</label>
      <input type="text" name="username" value={newUser.username} onChange={handleChange} />
      <label>Email:</label>
      <input type="email" name="email" value={newUser.email} onChange={handleChange} />
      {newUser.id ? (
        <button onClick={updateUser}>Update User</button>
      ) : (
        <button onClick={addData}>Add User</button>
      )}
    </div>
  );
};

export default Fetchapi;
