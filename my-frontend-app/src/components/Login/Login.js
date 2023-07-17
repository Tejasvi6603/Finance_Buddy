import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';
import axios from 'axios';



const BASE_URL = "http://localhost:3001/api/v1/";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
  try {
    const response = await axios.post(`${BASE_URL}login`, {
      email,
      password,
    });
    
    history.push('/home');
  } catch (error) {
    if (error.response && error.response.status === 400) {
      setError('Invalid email or password. Please try again.');
    } else {
      setError('An error occurred during login. Please try again later.');
    }
    console.log('Login error:', error);
  }
};


  const redirectToSignup = () => {
    history.push('/signup'); // Replace "/signup" with the actual URL of your signup page
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      {error && <p className="error-message">{error}</p>}
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <p>
          Don't have an account? <a href="/signup" onClick={redirectToSignup}>Signup</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
