import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Agence de Voyage</h1>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/hotels">Hôtels</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/admin">Admin</Link>
      </nav>
    </header>
  );
};

export default Header;