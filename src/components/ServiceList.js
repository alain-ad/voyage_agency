import React from 'react';
import '../styles/components.css';

const services = [
  'Réservation d\'hôtels',
  'Organisation de voyages',
  'Assistance 24/7',
  'Visites guidées',
];

const ServiceList = () => {
  return (
    <div className="service-list">
      <h2>Nos Services</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;