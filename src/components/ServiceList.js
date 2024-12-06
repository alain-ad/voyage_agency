import React from 'react';
import '../styles/components.css';

const popularHotels = [
  {
    name: 'Hôtel Carlton Antananarivo',
    agency: 'Agences de Voyage A',
    image: 'path/to/image-carlton.jpg', // Remplacez par le chemin de l'image
  },
  {
    name: 'Hôtel Le Louvre',
    agency: 'Agences de Voyage B',
    image: 'path/to/image-louvre.jpg', // Remplacez par le chemin de l'image
  },
  {
    name: 'Hôtel La Ribaudière',
    agency: 'Agences de Voyage C',
    image: 'path/to/image-ribaudiere.jpg', // Remplacez par le chemin de l'image
  },
  {
    name: 'Hôtel Nosy Be',
    agency: 'Agences de Voyage D',
    image: 'path/to/image-nosybe.jpg', // Remplacez par le chemin de l'image
  },
];

const ServiceList = () => {
  return (
    <div className="service-list">
      <h2>Nos Suggestions d'Hôtels Populaires à Madagascar</h2>
      <p>Découvrez ces hôtels recommandés pour votre prochain séjour :</p>
      <div className="hotel-suggestions">
        {popularHotels.map((hotel, index) => (
          <div className="hotel-card" key={index}>
            <img src={hotel.image} alt={hotel.name} className="hotel-image" />
            <h3>{hotel.name}</h3>
            <p><em>{hotel.agency}</em></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;