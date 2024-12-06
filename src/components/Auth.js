// src/components/Auth.js
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/components.css';


const Auth = ({ onClose }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      login(email, password);
      onClose(); // Ferme le formulaire après connexion réussie
    } catch (err) {
      setError('Identifiants incorrects');
    }
  };

  return (
    <div className="auth">
      <h2>Connexion Admin</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Auth;