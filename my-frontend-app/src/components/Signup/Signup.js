import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SignUp.css';
import axios from 'axios';
import { useGlobalContext } from '../../context/globalContext'; // Import the useGlobalContext hook

const BASE_URL = "http://localhost:3001/api/v1/";

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  

  const handleSignup = async () => {
    try {
      const response = await axios.post(`${BASE_URL}signup`, {
        username,
        email,
        password,
      });

     

      history.push('/login');
    } catch (error) {
      console.log('Signup error:', error);
    }
  };

  const redirectToLogin = () => {
    history.push('/login');
  };

  return (
    <div className="signup-container">
      <h2>Signup Page</h2>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
        <p>
          Already have an account? <a href="/login" onClick={redirectToLogin}>Log In</a>
        </p>
      </form>
      
    </div>
  );
}

export default Signup;
