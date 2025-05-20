import React, { useState, useEffect } from 'react';

const UserForm = ({ onAdd, onUpdate, editingUser }) => {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    if (editingUser) setUser(editingUser);
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editingUser ? onUpdate(user) : onAdd(user);
    setUser({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={user.name}
        onChange={e => setUser({ ...user, name: e.target.value })}
        placeholder="Name"
        required
      />
      <input
        value={user.email}
        onChange={e => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
        required
      />
      <button type="submit">{editingUser ? 'Update' : 'Add'} User</button>
    </form>
  );
};

export default UserForm;
