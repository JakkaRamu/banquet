import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VendorSignup from './Components/admin/VendorSignup';
import VendorLogin from './Components/admin/VendorLogin';
import VendorHomepage from './Components/admin/vendorhomepage'; // Import VendorHomepage
import UserSignup from './Components/User/UserSignup';
import UserLogin from './Components/User/UserLogin';
import Navbar from './Components/Navbar';
import './App.css';

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
          <Route path="/vendorhomepage" element={<VendorHomepage />} /> {/* New route for vendor homepage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
