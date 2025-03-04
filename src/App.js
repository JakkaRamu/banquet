import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VendorSignup from './pages/admin/VendorSignup';
import VendorLogin from './pages/admin/VendorLogin';
import UserSignup from './pages/User/UserSignup';
import UserLogin from './pages/User/UserLogin';
import Navbar from './Components/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
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
