import React, { useState} from "react";
import { Link } from 'react-router-dom'; // Importing Link for navigation
import './UserAuth.css'; // Corrected import for the new CSS file
import userImage from './userimage.jpg'; // Ensure this image is used
import { useNavigate } from "react-router-dom";

const UserLogin = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate(); // Using the navigate function from react-router-dom

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted', formData);
    };

    const handleVendor = () => {
        navigate('/vendorLogin');
    };
    return (
        <div className='container'> {/* Apply animation class */}
            <div className="form-container"> {/* Updated class name for container */}
                <div className="left-section"> {/* Updated class name for left section */}
                    <img src={userImage} alt="Banquet Hall" /> {/* Updated image path */}
                </div>
                <div className="right-section"> {/* Updated class name for right section */}
                    <h1>User Sign In</h1>
                    <form onSubmit={handleSubmit} className="form"> {/* Updated class name for form */}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email*"
                            required
                            value={formData.email}
                         onChange={handleChange}
                            className="input" // Updated class name for input
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password*"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            className="input" // Updated class name for input
                        />
                        <button type="submit" className="button">Sign In</button> {/* Updated class name for button */}
                        <p>Don't have an account? <Link to="/userSignup">Sign Up</Link></p> {/* Updated Link to userSignup */}
                    </form>
                    <div className="customer-box"> {/* Updated class name for customer box */}
                        <span>Are you a Vendor?</span>
                        <button className="customer-button" onClick={handleVendor}>Vendor Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;
