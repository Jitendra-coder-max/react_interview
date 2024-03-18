import React from 'react';
// drop down+ display element
const UserDropdown = ({ users }) => {
  return (
    <div>
      <select>

        {users.map((user) => (
            <option key={user.id} value={user.id}>{user.id} -{user.name}</option>
        ))}
      </select>

      <div>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.id} - {user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDropdown;
