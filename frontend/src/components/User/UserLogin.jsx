import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { login, createUsers } from "../../Action/UserAction";
import './user.css'

function UserLogin() {
  // Register

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:5000'  // or whatever your local API URL is
    : process.env.REACT_APP_API_URL;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  // const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  // const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [email, setEmail] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [formSuccess, setFormSuccess] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleTabClick = (tab) => (e) => {
    e.preventDefault();
    setActiveTab(tab);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };






  // REGISTER NEW USER
  // const registerUser = async (e) => {
  //   e.preventDefault();

  //   if (!formData.name || !formData.email || !formData.password) {
  //     alert('Please fill out all fields');
  //     return;
  //   }

  //   const newUserData = { ...formData };
  //   const result = JSON.stringify(newUserData);
  //   console.log(result)
  //   // setLoading(true);
  //   try {
  //     // const response = await fetch(`${process.env.REACT_APP_API_URL}/api/register-user`, {
  //     const response = await fetch(`${baseUrl}/api/register-user`, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(newUserData),
  //     });

  //     if (!response.ok) {
  //       const errorText = await response.text();
  //       // setLoading(false);
  //       // setError(`${errorText}`);
  //       //  resetForm();
  //       // setTimeout(() => {
  //       //   setError('');

  //       // }, 10000);


  //     }
  //     // setLoading(false);
  //     setFormSuccess('registered successfully');
  //     // resetForm();
  //     setTimeout(() => {
  //       setFormSuccess('');

  //     }, 10000);

  //     const newUser = await response.json();


  //     localStorage.setItem('isUserLoggedIn', 'true');
  //     sessionStorage.setItem('isUserLoggedIn', 'true');
  //     window.location.href = '/user/dashboard';

  //   } catch (err) {
  //     // setError(err.message);

  //     // setLoading(false);
  //     //  resetForm();
  //     // setTimeout(() => {
  //     //   setError('');

  //     // }, 10000);
  //   }
  // };

  const registerUser = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    if (!formData.name || !formData.email || !formData.password) {
      alert('Please fill out all required fields');
      return;
    }
    try {
      console.log(formData)
      await dispatch(createUsers(formData));
      setIsDisabled(false);
    } catch (error) {
      setIsDisabled(false);
    }

  };

  // Login functionality
  const { loading, error, isLoggedIn } = useSelector(state => state.loginAdmin);
  const storedValue = localStorage.getItem('user');

  const loginUser = async (event) => {
    event.preventDefault();
    setIsDisabled(true);
    try {
      await dispatch(login(email, password, 'user'));
     
      setIsDisabled(false);
    } catch (error) {
      // setError(error.response?.data?.message || error.message || 'Failed to add User');
      setIsDisabled(false);
    }
  };



  useEffect(() => {
    if (storedValue) {
      setFormSuccess("Login successful. Redirecting...");
      navigate('/dashboard')
    } else {

      setIsDisabled(false)
    }
  }, [storedValue, navigate]);

  const resetForm = () => {
    setUsername("")
    setPassword('');
    setEmail('');

  }
  const Styles = {
    disabled: {
      backgroundColor: 'gray',
      color: 'white',
      cursor: 'not-allowed',
      border: '0px'

    },
    notdisabled: {
      cursor: 'pointer'
    }
  }

  return (
    <div className='mt-[40px] lg:my-[80px] max-w-7xl mx-auto  flex'>
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
            <div id='login-form' className={`lg:border border-[#dee0ea;] rounded-[2px] lg:p-[60px] mt-[20px] px-[1px] w-full h-fit login-form`}>
              <form onSubmit={loginUser} className='flex flex-col mt-[20px]'>
                <p className='mb-[16px]'>
                  <label htmlFor="email" className=' text-[14px] mb-[5px]'>Email address&nbsp;<span class="required" aria-hidden="true">*</span></label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=""
                    className='border rounded-[3px] border-[#ddd] py-[8px] px-[15px] w-full'
                    required
                  /></p>
                <p className='mb-[16px]'>
                  <label htmlFor="password" className=' text-[14px] mb-[5px]'>Password&nbsp;<span class="required" aria-hidden="true">*</span></label>
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

                />
                  <span className=' text-[14px]'>Remember me</span>

                </p>
                <input type="hidden" name="role" value="user" />
                <button
                  disabled={isDisabled}
                  type="submit"
                  className='hover:opacity-[0.8] border border-[#ee403d;] mb-[16px] text-white bg-[#ee403d] py-[8px] px-[15px] w-fit rounded-[2px]'
                  style={isDisabled ? Styles.disabled : Styles.notdisabled}
                >
                  {loading ? "Loading..." : "Login"}
                </button>
                {error && <div className="text-primary-red mb-[16px] p-[16px] border border-[#ddd] text-[14px] ">{error}</div>}
                {formSuccess && (


                  <span className='mb-[16px] p-[16px] border border-[#ddd] text-[14px] text-success'>{formSuccess}</span>

                )}
                <div className='justify-center flex gap-2'>
                  {/* {loading && (<>
                    <CircularProgress
                      sx={{
                        color: (theme) =>
                          theme.palette.grey[theme.palette.mode === 'dark' ? 400 : 800],
                      }}
                      size={20}
                      thickness={4}
                      value={100}
                    />
                    Loading..
                  </>
                  )} */}
                </div>
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
                  disabled={isDisabled}
                  type="submit"
                  className='hover:opacity-[0.8] border border-[#ee403d] mb-[16px] text-white bg-[#ee403d] py-[8px] px-[15px] w-fit rounded-[2px]'
                >
                  {loading ? "Loading..." : "Register"}
                </button>

              </form>
              {error && <div className="text-primary-red mb-[16px] p-[16px] border border-[#ddd] text-[14px] ">{error}</div>}
              {formSuccess && (


                <span className='mb-[16px] p-[16px] border border-[#ddd] text-[14px] flex text-success'>{formSuccess}</span>

              )}

              <div className='justify-center flex gap-2'>
                {/* {loading && (<>
                  <CircularProgress
                    sx={{
                      color: (theme) =>
                        theme.palette.grey[theme.palette.mode === 'dark' ? 400 : 800],
                    }}
                    size={20}
                    thickness={4}
                    value={100}
                  />
                  Loading..
                </>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
