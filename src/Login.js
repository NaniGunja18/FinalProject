import React,{useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css';
import axios from 'axios';


const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [name, setName] = useState([]);
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    

  const handleSubmit = async(event) => {
    event.preventDefault();

    
    if (username && password) {
      try {
        const response = await axios.post('https://backend-oke1.onrender.com/api/login', {
          username,
            password,
        });
        setName(response.data);
        localStorage.setItem("name", response.data.username);
        localStorage.setItem("email", response.data.email);
        navigate('/home', { state: { name:response.data.username } });
        // console.log('Login gretting:', name);

    } catch (error) {
        setMessage(error.response?.data?.message || 'Error occurred.');
    }
       


    } else {
      alert('Invalid credentials'); 
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img src="/g2.png" alt="Logo" />
        <h1>Welcome Back 👋</h1>
        <p>Sign in to start exploring!</p>
        {name}
        <form onSubmit={handleSubmit}>
          <span>Email</span>
          <input type="email" name="email" placeholder="Example@email.com" required onChange={(e) => setUsername(e.target.value)} />
          <span>Password</span>
          <input type="password" name="password" placeholder="At least 8 characters" required onChange={(e) => setPassword(e.target.value)}/>
          <a href="/forgot-password" className="forgot-link">Forgot Password?</a>
          <button type="submit">Sign In</button>
        </form>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
      {message && <p>{message}</p>}

      <div className="login-image">
        <img src="/g1.png" alt="Delicious Food" />
      </div>
     
    </div>
  );
};

export default Login;
