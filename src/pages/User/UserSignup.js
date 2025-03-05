import React, { useState } from "react"; // Removed useEffect import
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'; // Importing Link for navigation // Importing the same CSS file for styling
import './UserAuth.css'; // Corrected import for the new CSS file
import userImage from './userimage.jpg'; // Ensure this image is used

const UserSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    brandName: "",
    city: "",
    UserType: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleVendorLogin = () => {
    navigate("/VendorLogin");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (<>
  <div className="container">
    <div className="form-container">
      <div className="left-section">
        <img src={userImage} alt="Banquet Hall" />
      </div>
      <div className="right-section">
        <h2>Grow your Business with EventHaven</h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="UserName"
            placeholder="User Name"
            className="input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            required
            value={formData.email}
            onChange={handleChange}
            className="input"
          />
          <div className="phone-container">
            <span>🇮🇳 +91</span>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number*"
              required
              value={formData.phone}
              onChange={handleChange}
              className="phone-input"
            />
          </div>
          <input
            type="password"
            name="password"
            placeholder="Password*"
            required
            value={formData.password}
            onChange={handleChange}
            className="input"
          />
          <button type="submit" className="button">Continue</button>
        </form>
        <p>Already have an account? <Link to="/UserLogin">Sign in</Link></p>
        <div className="customer-box">
          <span>Are you a vendor?</span>
          <button onClick={handleVendorLogin} className="customer-button">VendorLogin</button>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default UserSignup;
