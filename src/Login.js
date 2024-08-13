import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <h2>Log In</h2>
      <form className="login-form">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit" className="login-btn">Log In</button>
        <div className="login-options">
          <a href="#" className="forgot-password">Forgot Password?</a>
          <a href="/join-us" className="signup-link">Sign Up</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
