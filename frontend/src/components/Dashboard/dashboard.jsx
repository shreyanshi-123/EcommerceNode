import React, { useState } from 'react';
import UserForm from './UserForm';
import UserTable from './UserTable';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, { id: Date.now(), ...user }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
  };

  const startEdit = (user) => {
    setEditingUser(user);
  };

  return (
    <div className="container my-[150px]">
      <h1>Dashboard</h1>
      <UserForm onAdd={addUser} onUpdate={updateUser} editingUser={editingUser} />
      <UserTable users={users} onDelete={deleteUser} onEdit={startEdit} />
    </div>
  );
};

export default Dashboard;
