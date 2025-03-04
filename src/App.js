<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
=======

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VendorSignup from './Components/admin/VendorSignup';
import VendorLogin from './Components/admin/VendorLogin';
import UserSignup from './Components/User/UserSignup';
import UserLogin from './Components/User/UserLogin';
>>>>>>> cadb76ece3a9bf63f5557788ca4fa7ec7dee38de
import './App.css';

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<h1>Welcome to the App</h1>} />
        </Routes>
      </div>
    </Router>
=======
    <BrowserRouter>
      <Routes>
        <Route path="/VendorSignup" element={<VendorSignup />} />
        <Route path="/VendorLogin" element={<VendorLogin />} />
        <Route path="/UserSignup" element={<UserSignup />} />
        <Route path="/UserLogin" element={<UserLogin />} />
      </Routes>
    </BrowserRouter>
>>>>>>> cadb76ece3a9bf63f5557788ca4fa7ec7dee38de
  );
}

export default App;