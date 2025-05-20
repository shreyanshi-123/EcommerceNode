import React from 'react';

const UserTable = ({ users, onDelete, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th><th>Email</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length === 0 ? (
          <tr><td colSpan="3">No users</td></tr>
        ) : (
          users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td><td>{user.email}</td>
              <td>
                <button onClick={() => onEdit(user)}>Edit</button>
                <button onClick={() => onDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
