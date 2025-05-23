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
      setError('Error: Invalid username or password');
    }
  };

  return (
    <div className='mt-[200px] mb-[80px] max-w-7xl mx-auto  flex'>
      <div className='px-[15px] mx-auto max-w-[560px] w-full'>
        <div className='flex flex-col  border border-[#dee0ea;] rounded-[2px] p-[60px]'>
          <ul class="login-page-tab flex mb-[28px] justify-center">
            <li className=''><a href="#" class="active font-semibold uppercase text-[1.065rem]">Login</a></li>
            <li className='ml-[40px]'><a href="#" class="font-semibold uppercase text-[1.065rem] text-[#c2c2d3]">Register</a></li>
          </ul>
          <div id='login-form' className=' mt-[20px] px-[1px]'>
            <form onSubmit={handleLogin} className='flex flex-col mt-[20px]'>
              <p className='mb-[16px]'>
                <label for="username" className=' text-[14px] mb-[5px]'>Username or email address&nbsp;<span class="required" aria-hidden="true">*</span></label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder=""
                  className='border rounded-[3px] border-[#ddd] py-[8px] px-[15px] w-full'
                  required
                /></p>
              <p className='mb-[16px]'>
                <label for="password" className=' text-[14px] mb-[5px]'>Password&nbsp;<span class="required" aria-hidden="true">*</span></label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=""
                  className='border rounded-[2px] border-[#ddd] py-[8px] px-[15px] w-full'
                  required
                />
              </p>
              <p className='mb-[16px] flex gap-[4px]'> <input
                  type="checkbox"
                
                  className='border rounded-[2px] border-[#ddd] py-[5px] px-[20px]' 
                  required
                />
                <span className=' text-[14px]'>Remember me</span>
                
                </p>
             
              <button
                type="submit"
                className='hover:opacity-[0.8] border border-[#ee403d;] mb-[16px] text-white bg-[#ee403d] py-[8px] px-[15px] w-fit rounded-[2px]'
              >
                Login
              </button>
               {error && <div className="text-black mb-[16px] p-[16px] border border-[#ddd] text-[14px]">{error}</div>}

              <p class="">
								<a href="#" className='text-[16px] text-[#ee403d] no-underline'>Lost your password?</a>
							</p>
            </form>
          </div>
          <div id='refistration-form' className=''>
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
      </div>
    </div>
  );
}

export default UserLogin;
