// ResetPasswordForm.js
import React, { useState } from 'react';
import icon from './back-icon.png'

function ResetPasswordForm({ onReset, onBack }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onReset(email);
  };

  return (
    <form className="reset-form" onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Skicka mail</button>
      <img src={icon} onClick={onBack}/> {/* Back button */}
    </form>
  );
}

export default ResetPasswordForm;

