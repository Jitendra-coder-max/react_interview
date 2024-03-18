import React, { useEffect, useState } from "react";
import axios from "axios";
const APisearch = () => {
  const [users, setUsers] = useState([]);
  const [queryData, setQueryData] = useState("");

  const [searched, setSearched] = useState([]);

  useEffect(() => {
    const Fetchapi = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      setUsers(res.data);
    };

    Fetchapi();
    console.log(users);
  }, []);

  useEffect(() => {
    if (queryData) {
      setSearched(
        users.filter((user) => {
          return Object.values(user)
            .join("")
            .toLowerCase()
            .includes(queryData.toLowerCase());
        })
      );
    } else {
      setUsers(users);
    }
  },[queryData]);

  return (
    <div>
      APisearch
      <input
        placeholder="enter text"
        onChange={(e) => setQueryData(e.target.value)}
      />
      <ul>
        {queryData.length > 0
          ? searched.map((search) => (
              <li key={search.id}>
                <p>{search.name}</p>
                <p>{search.username}</p>
                <p>{search.email}</p>{" "}
              </li>
            ))
          : users.map((user) => (
              <li key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.username}</p>{" "}
              </li>
            ))}
      </ul>
    </div>
  );
};

export default APisearch;

//     < ul >
// {
//     users.map((user) => {
//         return (
//             <li key={user.id}>
//                 <p>{user.name}</p>
//                 <p>{user.email}</p>
//                 <p>{user.username}</p> </li>
//         )
//     })
// }

//      </ >
