import React, { useState } from 'react';
import Header from '../components/Header';
import HotelCatalog from '../components/HotelCatalog';
import HotelFilters from '../components/HotelFilters';
import Footer from '../components/Footer';

const HotelPage = () => {
  const [hotels] = useState([
    { id: 1, name: 'Hôtel A', description: 'Description A', price: 100, stars: 4 },
    { id: 2, name: 'Hôtel B', description: 'Description B', price: 150, stars: 5 },
    { id: 3, name: 'Hôtel C', description: 'Description C', price: 200, stars: 3 },
    // Ajoutez d'autres hôtels ici
  ]);

  // État pour les filtres
  const [filters, setFilters] = useState({ stars: '', price: '' });

  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
  };

  // Logique de filtrage
  const filteredHotels = hotels.filter((hotel) => {
    const starMatch = filters.stars ? hotel.stars === parseInt(filters.stars) : true;
    const priceMatch = filters.price ? hotel.price <= parseInt(filters.price) : true;
    return starMatch && priceMatch;
  });

  return (
    <div>
      <Header />
      <HotelFilters onFilterChange={handleFilterChange} />
      <HotelCatalog hotels={filteredHotels} />
      <Footer />
    </div>
  );
};

export default HotelPage;