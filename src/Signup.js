import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import { useUser } from './UserContext'; 
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const { updateUser } = useUser(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backend-oke1.onrender.com/api/signup', {
        username,
        email,
        password,
      });
      setMessage(response.data.message);
      updateUser(username, email);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error occurred.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Create an Account</h1>
        <p>Join us and explore the best food delivery experience.</p>
        <form onSubmit={handleSubmit}>
          <span>Name</span>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <span>Email</span>
          <input
            type="email"
            name="email"
            placeholder="Example@email.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Password</span>
          <input
            type="password"
            name="password"
            placeholder="At least 8 characters"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" >Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="/">Sign In</a>
        </p>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Signup;
