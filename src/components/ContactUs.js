import React, { useState } from 'react';
import '../styles/components.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email envoyé à : ${formData.email}\nNom : ${formData.name}\nMessage : ${formData.message}`);
    // Réinitialiser le formulaire après soumission
    setFormData({ email: '', name: '', message: '' });
  };

  return (
    <div className="contact-us">
      <h2>Nous Contacter</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Nom:
          <input 
            type="text" 
            name="name"
            value={formData.name} 
            onChange={handleChange} 
            required 
            className="contact-input"
          />
        </label>
        <label>
          Email:
          <input 
            type="email" 
            name="email"
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="contact-input"
          />
        </label>
        <label>
          Message:
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            className="contact-textarea"
          />
        </label>
        <button type="submit" className="contact-button">Envoyer</button>
      </form>
    </div>
  );
};

export default ContactUs;