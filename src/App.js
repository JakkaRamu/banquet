import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VendorSignup from './Components/admin/VendorSignup';
import VendorLogin from './Components/admin/VendorLogin';
import UserSignup from './Components/User/UserSignup';
import UserLogin from './Components/User/UserLogin';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/VendorSignup" element={<VendorSignup />} />
        <Route path="/VendorLogin" element={<VendorLogin />} />
        <Route path="/UserSignup" element={<UserSignup />} />
        <Route path="/UserLogin" element={<UserLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
