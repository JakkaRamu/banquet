import React, { useState } from "react";
import './vendorSignup.css';
import imagesingup from './signup-bg.jpg';
import { useNavigate } from "react-router-dom";

const VendorSignin = () => {
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

  return (<>
      <div className="container"> {/* Updated class name for container */}
        <div className="container1"> {/* Updated class name for container */}
          <div className="left-section"> {/* Updated class name for left section */}
            <img src={imagesingup} alt="Banquet Hall" />
          </div>
          <div className="right-section"> {/* Updated class name for right section */}
            <h2>Grow your Business with EventHaven</h2>
            <form onSubmit={handleSubmit} className="form"> {/* Updated class name for form */}
              <input type="email" name="email" placeholder="Email*" required value={formData.email} onChange={handleChange} className="input" />
              <input type="password" name="password" placeholder="Password*" required value={formData.password} onChange={handleChange} className="input" />
              <button type="submit" className="button">Continue</button> {/* Updated class name for button */}
            </form>
            <p>Create new Account <a href="/vendorSignup">Sign Up</a></p>
            <div className="customer-box"> {/* Updated class name for customer box */}
              <span>Are you a customer?</span>
              <button className="customer-button" onClick={handleCustomer}>Customer Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorSignin;
