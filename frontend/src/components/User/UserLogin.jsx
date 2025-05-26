import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './user.css'

function UserLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const [isDisabled, setIsDisabled] = useState(false);
  const [email, setEmail] = useState('');
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();



  const handleTabClick = (tab) => (e) => {
    e.preventDefault();
    setActiveTab(tab);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  // Fetch users on mount (if needed)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/get-users');
        if (!response.ok) throw new Error('Failed to fetch users');
        const data = await response.json();
        setUsers(data.users || []);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchUsers();
  }, []);



  // REGISTER NEW USER
  const registerUser = async () => {
    if (!formData.name || !formData.email || !formData.password) {
      alert('Please fill out all fields');
      return;
    }

    // const tagsArray = formData.tags.split(',').map(item => item.trim());
    const newUserData = { ...formData };

    try {
      const response = await fetch(`http://localhost:5000/api/register-user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUserData),
      });

      if (!response.ok) throw new Error('Failed to add user');
      const newUser = await response.json();
      setUsers(prevUsers => [...prevUsers, newUser]);
      resetForm();
      window.location.href = '/user/dashboard';
    } catch (err) {
      setError(err.message);
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    // Function to fetch users data from the server
    // const fetchData = async () => {
    //     try {

    //         const response = await fetch(`{http://localhost:5000/api/get-user/${userId}`);

    //         if (!response.ok) {
    //             throw new Error('Failed to fetch user data');
    //         }

    //         const usersData = await response.json();
    //         const usersArray = Array.isArray(usersData) ? usersData : usersData?.users || [];
    //         setUsers(usersArray);  // Set the users state
    //     } catch (err) {
    //         setError(err.message);  // Handle error
    //     } finally {
    //         setLoading(false);  // Stop loading
    //     }
    // };

    // Fetch users data on initial render
    // useEffect(() => {
    //     fetchData();  // Call the fetchData function
    // }, []);  // Empty dependency array means this effect runs only once when the component mounts

    const userUsername = process.env.REACT_APP_USER_USERNAME;
    const userPassword = process.env.REACT_APP_USER_PASSWORD;
    const email = process.env.REACT_APP_USER_EMAIL

    if (username === userUsername && password === userPassword) {
      localStorage.setItem('isUserLoggedIn', 'true');
      sessionStorage.setItem('isUserLoggedIn', 'true');
      window.location.href = '/user/dashboard';
    } else {
      setError('Error: Invalid username or password');
    }
  };
  const resetForm = () => {
    setFormData({ name: '', email: '', password: '' });
    // setEditingBlog(null);
  };

  return (
    <div className='mt-[40px] lg:mt-[200px] mb-[80px] max-w-7xl mx-auto  flex'>
      <div className='px-[15px] mx-auto max-w-[560px] w-full'>
        <div className='flex flex-col  '>
          <ul className="login-page-tab flex mb-[28px] justify-center">
            <li>
              <button
                onClick={handleTabClick('login')}
                disabled={activeTab === 'login'}
                className={`font-semibold uppercase text-[1.065rem] ${activeTab === 'login' ? 'active' : 'text-[#c2c2d3]'}`}
                style={{ cursor: activeTab === 'login' ? 'default' : 'pointer' }}
                aria-pressed={activeTab === 'login'}
                type="button"
              >
                Login
              </button>
            </li>
            <li className="ml-[20px] sm:ml-[40px]">
              <button
                onClick={handleTabClick('register')}
                disabled={activeTab === 'register'}
                className={`font-semibold uppercase text-[1.065rem] ${activeTab === 'register' ? 'active' : 'text-[#c2c2d3]'}`}
                style={{ cursor: activeTab === 'register' ? 'default' : 'pointer' }}
                aria-pressed={activeTab === 'register'}
                type="button"
              >
                Register
              </button>
            </li>
          </ul>

          <div className={`flex w-[200%] form-wrapper ${activeTab === 'login' ? 'my-element ' : 'my-element active'}`}>
            <div id='login-form' className={`lg:border border-[#dee0ea;] rounded-[2px] lg:p-[60px] mt-[20px] px-[1px] w-full h-fit `}>
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
                {/* {error && <div className="text-black mb-[16px] p-[16px] border border-[#ddd] text-[14px]">{error}</div>} */}

                <p class="">
                  <a href="#" className='text-[16px] text-[#ee403d] no-underline'>Lost your password?</a>
                </p>
              </form>
            </div>
            <div id='refistration-form' className={`lg:border border-[#dee0ea;] rounded-[2px] lg:p-[60px] opacity-[0]  mt-[20px] px-[1px] w-full opacity-[0] `}>
              <form onSubmit={registerUser} className='flex flex-col mt-[20px]'>
                <p className='mb-[16px]'>
                  <label htmlFor="name" className='text-[14px] mb-[5px]'>
                    Username <span className="required" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className='border rounded-[3px] border-[#ddd] py-[8px] px-[15px] w-full'
                    required
                  />
                </p>
                <p className='mb-[16px]'>
                  <label htmlFor="email" className='text-[14px] mb-[5px]'>
                    Email address <span className="required" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className='border rounded-[2px] border-[#ddd] py-[8px] px-[15px] w-full'
                    required
                  />
                </p>
                <p className='mb-[16px]'>
                  <label htmlFor="password" className='text-[14px] mb-[5px]'>
                    Password <span className="required" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className='border rounded-[2px] border-[#ddd] py-[8px] px-[15px] w-full'
                    required
                  />
                </p>
                <p className='text-[13px] mb-[5px]'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a className='hover:text-[#0a58ca] text-primary-red cursor-pointer'>privacy policy.</a></p>
                <button
                  type="submit"
                  className='hover:opacity-[0.8] border border-[#ee403d] mb-[16px] text-white bg-[#ee403d] py-[8px] px-[15px] w-fit rounded-[2px]'
                >
                  Register
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
