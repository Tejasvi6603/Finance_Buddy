import React from 'react';
import './StartPage.css'
import panda from '../../image/panda.png'
import { useHistory } from 'react-router-dom';

const StartPage = () => {
  const history=useHistory();

  const handleLogin=() => {
    history.push('/login');
  };

  const handleSignOut=() => {
    history.push('/signup');
  };

 
  return (
    <div className="startpage-container">
      <h1>Welcome to Finance Buddy</h1>
      <img src={panda} alt="Panda" className="panda-image" />
      <div className="button_Container">
      <button type="button" onClick={handleLogin}>
        Login
      </button>
      <button type="button" onClick={handleSignOut}>
        SignUp
      </button>
      </div>
    </div>
  )
}

export default StartPage
