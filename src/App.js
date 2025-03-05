import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VendorSignup from './pages/admin/VendorSignup';
import VendorLogin from './pages/admin/VendorLogin';
import UserSignup from './pages/User/UserSignup';
import UserLogin from './pages/User/UserLogin';
import Navbar from './Components/Navbar';
import './App.css';
import Homepage from './components.js/home';
import NewBusinessRolePage from './components.js/NewBusinessRolePage'; // Updated import
import CustomerRolePage from './components.js/CustomerRolePage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/business" element={<NewBusinessRolePage />} /> 
          <Route path="/customer" element={<CustomerRolePage />} />
          <Route path="/VendorSignup" element={<VendorSignup />} />
          <Route path="/VendorLogin" element={<VendorLogin />} />
          <Route path="/UserSignup" element={<UserSignup />} />
          <Route path="/UserLogin" element={<UserLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
