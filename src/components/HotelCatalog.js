import React from 'react';
import '../styles/components.css';

const HotelCatalog = ({ hotels }) => {
  return (
    <div className="hotel-catalog">
      <h2>Catalogue d'Hôtels</h2>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            <h3>{hotel.name}</h3>
            <p>{hotel.description}</p>
            <p>Prix: {hotel.price} €</p>
            <p>Étoiles: {hotel.stars}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelCatalog;