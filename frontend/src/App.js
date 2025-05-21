import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './components/TermsConditions/TermsConditions';
import PageNotFound from './components/Layout/PageNotFound';
import Dashboard from './components/Dashboard/dashboard';


function App() {

  return (
    <>
  

      <BrowserRouter  >
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-conditions' element={<TermsConditions />} />
            <Route path='*' element={<PageNotFound />} />

            
          <Route path='/dashboard' element={<Dashboard />} />
           

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
