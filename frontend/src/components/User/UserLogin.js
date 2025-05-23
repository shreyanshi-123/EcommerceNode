import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const userUsername = process.env.REACT_APP_USER_USERNAME;
    const userPassword = process.env.REACT_APP_USER_PASSWORD;

    if (username === userUsername && password === userPassword) {
      localStorage.setItem('isUserLoggedIn', 'true');
      sessionStorage.setItem('isUserLoggedIn', 'true');
       window.location.href = '/user/dashboard';
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='my-[200px] max-w-7xl mx-auto justify-center flex'>
      <div className='flex flex-col w-1/4 border rounded-[10px] p-[20px]'>
        <h2 className='mb-4 text-lg font-semibold'>User Login</h2>

        <form onSubmit={handleLogin} className='flex gap-4 flex-col'>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            className='border rounded-[3px] border-[#ddd] py-[5px] px-[20px]'
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className='border rounded-[3px] border-[#ddd] py-[5px] px-[20px]'
            required
          />

          {error && <div className="text-red-500">{error}</div>}

          <button
            type="submit"
            className='hover:bg-white border border-[#000] text-white bg-black py-[5px] px-[20px] w-fit rounded-[3px]'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserLogin;
