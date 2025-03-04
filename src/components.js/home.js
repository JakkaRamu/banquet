import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Homepage = () => {
  const [showRoleSelection, setShowRoleSelection] = useState(false);
  const navigate = useNavigate();

  const handleSignupClick = () => {
    setShowRoleSelection(true);
  };

  return (
    <div className="user-signup">
      <h1>Welcome to the Banquet Hall Application</h1>
      <button onClick={handleSignupClick}>Signup</button>
      <button>Login</button>

      {showRoleSelection && (
        <div className="role-selection">
          <h2>Select your role:</h2>
          <button onClick={() => navigate('/business')}>Business</button>
          <button onClick={() => navigate('/customer')}>User</button>
        </div>
      )}
    </div>
  );
};

export default Homepage;
