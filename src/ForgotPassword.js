import React from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    console.log('Forgot Password Request for:', email);
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        <h1>Reset Password</h1>
        <p>Enter your email to receive a password reset link.</p>
        <form onSubmit={handleSubmit}>
          <span>Email</span>
          <input type="email" name="email" placeholder="Example@email.com" required />
          <button type="submit">Send Reset Link</button>
        </form>
        <p>
          Remembered your password? <a href="/">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
