import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-card">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div>
            <input type="email" placeholder='enter email' id="email" required />
          </div>
          <div>
            <input type="password" placeholder='password' id="password" required />
          </div>
          <button type="submit">Login</button>
          <div>
            <p>Create new account. <a href='./Signup'>Signup</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
