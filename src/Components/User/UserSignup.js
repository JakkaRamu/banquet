import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const UserSignup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phonenumber:'',
    password: '',
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
        <h1>Sign Up</h1>
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
          <label htmlFor="phonenumber">Phone Number*:</label>
            <input
              type="number"
              id="number"
              name="number"
              value={formData.phonenumber}
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
          <button type="submit">Sign Up</button>
        </form>
        <Link to="/UserLogin" className="link blue">Already have an Account? Sign in</Link>
        <Link to="/vendorSignup" className="link black">Are you a vendor? Vendor Sign Up</Link>
      </div>
    </div>
  );
};

export default UserSignup;
