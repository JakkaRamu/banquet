import React, { useState } from "react";
import './vendorSignup.css';
import imagesingup from './signup-bg.jpg';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const VendorSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    brandName: "",
    city: "",
    vendorType: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleCustomer = () => {
    navigate("/userLogin");
  }

  return (
    <>
    <div className="container"> {/* Updated class name for container */}
    <div className="container1"> {/* Updated class name for container */}
      <div className="left-section"> {/* Updated class name for left section */}
        <img src={imagesingup} alt="Banquet Hall" />

      </div>
      <div className="right-section"> {/* Updated class name for right section */}
        <h2>Grow your Business with EventHaven</h2>
        <form onSubmit={handleSubmit} className="form"> {/* Updated class name for form */}
          <input
            type="text"
            name="brandName"
            placeholder="Brand Name*"
            required
            value={formData.brandName}
            onChange={handleChange}
            className="input" // Updated class name for input
          />
          <input
          type="text"
          name="vendorName"
          placeholder="Vendor Name"
          class = "input"
          />
          <select name="city" required value={formData.city} onChange={handleChange} className="select"> {/* Updated class name for select */}
            <option value="">City (Choose your base city here)*</option>
            <option value="Delhi">Hyderabad</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
          </select>
          <input type="email" name="email" placeholder="Email*" required value={formData.email} onChange={handleChange} className="input" />
          <div className="phone-container">
            <span>🇮🇳 +91</span>
            <input type="text" name="phone" placeholder="Phone Number*" required value={formData.phone} onChange={handleChange} className="phone-input" />
          </div>
          <input type="password" name="password" placeholder="Password*" required value={formData.password} onChange={handleChange} className="input" />
          <button type="submit" className="button">Continue</button> {/* Updated class name for button */}
        </form>
        <p>Already have an account? <Link to="/VendorLogin">Login in</Link></p>
        <div className="customer-box"> {/* Updated class name for customer box */}
          <span>Are you a customer?</span>
          <button className="customer-button" onClick={handleCustomer}>Customer Sign In</button>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default VendorSignup;
