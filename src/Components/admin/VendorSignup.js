import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const VendorSignup = () => {
  const [formData, setFormData] = useState({
    username:'',
    brandName: '',
    city: '',
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
    // Add form validation and submission logic here
    console.log('Form submitted', formData);
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Grow your Business</h2>
        <p>Sign Up to access your Dashboard</p>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Username*:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="brandName">Brand name*:</label>
            <input
              type="text"
              id="brandName"
              name="brandName"
              value={formData.brandName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="city">City*:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
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
          <button type="submit">Continue</button>
        </form>
        <Link to="/VendorLogin" className="link blue">Already have an Account? Sign in</Link>
        <Link to="/UserSignup" className="link black">Are you a customer? Customer Sign Up</Link>
      </div>
    </div>
  );
};

export default VendorSignup;