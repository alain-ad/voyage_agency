import React from 'react';
import '../styles/components.css';

const HotelCatalog = ({ agencies }) => {
  return (
    <div className="hotel-catalog">
      <h2>Catalogue d'Hôtels</h2>
      {agencies.map((agency) => (
        <div key={agency.id} className="agency-section">
          <h3>{agency.name}</h3>
          <div className="hotel-list">
            {agency.hotels.map((hotel) => (
              <div key={hotel.id} className="hotel-item">
                <img src={hotel.image} alt={hotel.name} className="hotel-image" />
                <h4>{hotel.name}</h4>
                <p>{hotel.description}</p>
                <p>Prix: {hotel.price} ariary</p>
                <p>Étoiles: {hotel.stars}</p>
                <button className="reserve-button">Réserver</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelCatalog;