import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './components/TermsConditions/TermsConditions';
import PageNotFound from './components/Layout/PageNotFound';
// import Dashboard from './components/Dashboard/dashboard';
import UserDashboard from './components/User/UserDashboard';
import ProtectedRoute from './components/User/ProtectedRoute'; // Import the ProtectedRoute component
import UserLogin from './components/User/UserLogin';



function App() {
 const [isUserLoggedIn, setIsUserLoggedIn] = useState(
    localStorage.getItem('isUserLoggedIn') === 'true'
  );

  // Listen for changes in localStorage across different tabs
  useEffect(() => {
    const handleStorageChange = () => {
     
      setIsUserLoggedIn(sessionStorage.getItem('isUserLoggedIn') === 'true');
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  return (
    <>


      <BrowserRouter  >
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-conditions' element={<TermsConditions />} />
            <Route path='*' element={<PageNotFound />} />


            {/* User Routes */}
            <Route path="/user/login" element={<UserLogin />} />
            
            <Route
              path="/user/dashboard"
              element={
                <ProtectedRoute
                  isLoggedIn={isUserLoggedIn}
                  redirectPath="/user/login"
                >
                  <UserDashboard />
                </ProtectedRoute>
              }
            />

            {/* <Route path='/dashboard' element={<Dashboard />} /> */}


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
