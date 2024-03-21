// Login.js
import React, { useState } from 'react';
import './login.css';
import icon from './back-icon.png';
import mcon from './group-icon.png';
import scon from './seller-icon.png';
import ResetPasswordForm from './ResetPasswordForm';

function AdminLogin({ onSubmit, onBack, onForgotPassword }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, password, role: 'admin' });
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

function SellerLogin({ onSubmit, onBack, onForgotPassword }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, password, role: 'säljare' });
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

function Login() {
  const [showLogin, setShowLogin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setShowLogin(true);
  };

  const handleLogin = (userData) => {
    setLoggedInUser(userData);
    // Handle login logic
  };

  const handleBack = () => {
    setShowLogin(false);
    setSelectedRole(null);
    setShowForgotPassword(false);
  };

  const handleForgotPassword = () => {
    setShowForgotPassword(true);
  };

  const handleResetPassword = (email) => {
    console.log('Reset password for email:', email);
  };

  return (
    <div className="login-container">
      <div className='login-text'>
        <h1>{showForgotPassword ? 'Återställ lösenord' : selectedRole ? `Logga in som ${selectedRole}` : 'Logga in'}</h1>
      </div>
      {!showLogin && !showForgotPassword && (
        <div className="role-selection">
          <div className="role-option" onClick={() => handleRoleSelect('admin')}>
            <img src={mcon} alt="Admin" />
            <h3>Admin</h3>
          </div>
          <div className="role-option1" onClick={() => handleRoleSelect('säljare')}>
            <img src={scon} alt="Seller" />
            <h3>Säljare</h3>
          </div>
        </div>
      )}
      {showForgotPassword && (
        <ResetPasswordForm onReset={handleResetPassword} onBack={handleBack} />
      )}
      {showLogin && selectedRole === 'admin' && !showForgotPassword && (
        <AdminLogin onSubmit={handleLogin} onBack={handleBack} onForgotPassword={handleForgotPassword} />
      )}
      {showLogin && selectedRole === 'säljare' && !showForgotPassword && (
        <SellerLogin onSubmit={handleLogin} onBack={handleBack} onForgotPassword={handleForgotPassword} />
      )}
    </div>
  );
}

export default Login;