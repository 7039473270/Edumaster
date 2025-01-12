import React from 'react';
import './JoinUs.css';

function JoinUs() {
  return (
    <div className="join-container">
      <h2>Join Us Now</h2>
      <form className="join-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" name="confirm-password" required />

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default JoinUs;
