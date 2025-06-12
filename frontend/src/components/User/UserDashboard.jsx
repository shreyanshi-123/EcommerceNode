import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Action/UserAction";
import { ToastContainer, toast, Bounce } from "react-toastify";
import './user.css'

function UserDashboard() {
  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:5000'
    : process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => state.loginAdmin.isLoggedIn);

  const storedValueRaw = localStorage.getItem('user');
  // const storedValue = storedValueRaw ? JSON.parse(storedValueRaw) : null;
  
  const Name = storedValueRaw?.name || 'User';
  // alert(JSON.stringify(storedValue))
  useEffect(() => {
    if (!storedValueRaw) {
      navigate('/');
    }
  }, [storedValueRaw, navigate]);

 



 

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logged Out Successfully')
    navigate('/login');
  }


  return (
    <div className='my-[100px] max-w-7xl mx-auto px-4'>
      <div className='border rounded-[10px] p-[20px] w-full md:w-1/2 mx-auto text-center'>


        <h2 className='text-2xl font-semibold mb-4'>Welcome back, {Name}!</h2>
        <p className=''>We're glad to see you again.</p>
        <p className='mb-4'> Here’s what’s happening with your account today.</p>
        <button
          onClick={handleLogout}
          className='hover:text-black hover:bg-white border border-primary-red text-white bg-primary-red py-[10px] px-[20px] rounded-[5px] logout'
        >
          Logout
        </button>
        <ToastContainer position="top-center" theme="colored" autoClose={3000} />
      </div>
    </div>
  );
}

export default UserDashboard;
