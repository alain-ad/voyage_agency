// src/components/ContactInfo.js
import React from 'react';
import '../styles/components.css'; // Assurez-vous d'importer le CSS

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h3>Informations de Contact</h3>
      <div className="contact-item">
        <span className="contact-icon">🏢</span>
        <p>Adresse : 45 Avenue de l'Indépendance, Antananarivo, Madagascar</p>
      </div>
      <div className="contact-item">
        <span className="contact-icon">📞</span>
        <p>Téléphone : +261 34 12 34 56</p>
      </div>
      <div className="contact-item">
        <span className="contact-icon">📧</span>
        <p>Email : contact@voyagesmadagascar.com</p>
      </div>
      <div className="contact-item">
        <span className="contact-icon">🕒</span>
        <p>Horaires d'ouverture : Lundi - Vendredi, 8h00 - 17h00</p>
      </div>
    </div>
  );
};

export default ContactInfo;