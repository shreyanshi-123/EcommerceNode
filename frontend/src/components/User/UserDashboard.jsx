import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function UserDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isUserLoggedIn');
    if (!isLoggedIn) {
      navigate('/user/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isUserLoggedIn');
    sessionStorage.removeItem('isUserLoggedIn');
      window.location.href = '/user/login';
  };

  return (
    <div className='my-[200px] max-w-7xl mx-auto px-4'>
      <div className='border rounded-[10px] p-[20px] w-full md:w-1/2 mx-auto text-center'>
        <h2 className='text-2xl font-semibold mb-6'>User Dashboard</h2>
        <p className='mb-4'>Welcome to your dashboard!</p>
        <button
          onClick={handleLogout}
          className='hover:text-black hover:bg-white border border-black text-white bg-black py-[10px] px-[20px] rounded-[5px]'
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default UserDashboard;
