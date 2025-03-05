import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Change useHistory to useNavigate
import '../../App.css';

const VendorLogin = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData); // Log form data for debugging

    // Validate credentials
    if (formData.email === 'vendor@example.com' && formData.password === 'password') {
      navigate('/vendorhomepage'); // Redirect to vendor homepage using navigate
    } else {
      console.error('Invalid credentials'); // Log error for invalid credentials
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email*:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password*:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
        <Link to="/VendorSignup" className="link blue">Don't have an Account? Sign Up</Link>
        <Link to="/UserLogin" className="link black">Are you a customer? Customer Sign In</Link>
      </div>
    </div>
  );
};

export default VendorLogin;
