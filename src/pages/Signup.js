import React from 'react';
import './Signup.css';

function Signup() {
  return (
    <div className="signup-card">
      <div className="signup-container">
        <h2>Signup</h2>
        <form>
          <div>
            <input type="text" placeholder='full name' id="fullname" required />
          </div>
          <div>
            <input type='text' placeholder='9876543210' id='mobile' required />
          </div>
          <div>
            <input type="email" id="email" placeholder='Enter email' required />
          </div>
          <div>
            <input type="password" id="password" placeholder='password' required />
          </div>
          <button type="submit">Signup</button>
          <div>
            <p>Already have an account? <a href="/login">Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
