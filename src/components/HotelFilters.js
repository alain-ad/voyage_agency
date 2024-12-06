import React from 'react';
import '../styles/components.css'; // Assurez-vous que le fichier CSS est correctement importé

const HotelFilters = ({ onFilterChange }) => {
  return (
    <div className="filters">
      <h3>Filtrer par étoiles</h3>
      <select onChange={(e) => onFilterChange('stars', e.target.value)} className="filter-select">
        <option value="">Tous</option>
        <option value="1">1 étoile</option>
        <option value="2">2 étoiles</option>
        <option value="3">3 étoiles</option>
        <option value="4">4 étoiles</option>
        <option value="5">5 étoiles</option>
      </select>

      <h3>Filtrer par prix maximum</h3>
      <input
        type="number"
        placeholder="Prix maximum"
        onChange={(e) => onFilterChange('price', e.target.value)}
        className="filter-input"
      />
    </div>
  );
};

export default HotelFilters;