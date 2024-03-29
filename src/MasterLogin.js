import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import icon from './back-icon.png';
import axios from 'axios';

function MasterLogin({ onSubmit, onBack, onForgotPassword }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3001/login', {username, password, role: 'master'})
      .then(result => {
          console.log(result)
          // const token = result.data.token;
          // localStorage.setItem('token', token);
          if (result.data === "Success"){
              navigate('/home-master')
          }
      })
      .catch(err=> console.log(err))
    };
  
    return (
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Användarnamn" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Lösenord" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Logga in</button>
        <a href="#" onClick={onForgotPassword}>Glömt lösenord?</a>
        <img src={icon} onClick={onBack} alt="Back" />
      </form>
    );
}
export default MasterLogin;