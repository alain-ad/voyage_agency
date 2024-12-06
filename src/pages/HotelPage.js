import React, { useState } from 'react';
import Header from '../components/Header';
import HotelCatalog from '../components/HotelCatalog';
import HotelFilters from '../components/HotelFilters';
import Footer from '../components/Footer';

const HotelPage = () => {
  const [agencies] = useState([
    {
      id: 1,
      name: 'Madagascar Tours',
      hotels: [
        {
          id: 1,
          name: 'Hôtel Carlton Antananarivo',
          description: 'Hôtel de luxe au cœur de la ville.',
          price: 150000, // Prix en ariary
          stars: 5,
          image: 'path/to/image-carlton.jpg',
        },
        {
          id: 2,
          name: 'Hôtel Le Louvre',
          description: 'Confort et élégance à Antananarivo.',
          price: 120000,
          stars: 4,
          image: 'path/to/image-louvre.jpg',
        },
        {
          id: 3,
          name: 'Hôtel Tamboho',
          description: 'Un hôtel moderne avec une vue magnifique.',
          price: 90000,
          stars: 4,
          image: 'path/to/image-tamboho.jpg',
        },
        {
          id: 4,
          name: 'Hôtel Radisson Blu',
          description: 'Hôtel de luxe avec des services haut de gamme.',
          price: 250000,
          stars: 5,
          image: 'path/to/image-radisson.jpg',
        },
        {
          id: 5,
          name: 'Hôtel Ibis Antananarivo',
          description: 'Hôtel économique, idéal pour les séjours d’affaires.',
          price: 70000,
          stars: 3,
          image: 'path/to/image-ibis.jpg',
        },
      ],
    },
    {
      id: 2,
      name: 'Voyages Madagascar',
      hotels: [
        {
          id: 6,
          name: 'Hôtel La Ribaudière',
          description: 'Un cadre charmant avec une belle vue.',
          price: 80000,
          stars: 3,
          image: 'path/to/image-ribaudiere.jpg',
        },
        {
          id: 7,
          name: 'Hôtel Nosy Be',
          description: 'Hôtel en bord de mer sur l’île de Nosy Be.',
          price: 200000,
          stars: 4,
          image: 'path/to/image-nosybe.jpg',
        },
        {
          id: 8,
          name: 'Hôtel L’Heure Bleue',
          description: 'Un hôtel tranquille avec un excellent restaurant.',
          price: 120000,
          stars: 4,
          image: 'path/to/image-heurebleue.jpg',
        },
        {
          id: 9,
          name: 'Hôtel Le Grand Bleu',
          description: 'Un hôtel en bord de mer avec des activités nautiques.',
          price: 220000,
          stars: 5,
          image: 'path/to/image-grandbleu.jpg',
        },
        {
          id: 10,
          name: 'Hôtel de l’Isle',
          description: 'Un cadre paisible à Antananarivo.',
          price: 85000,
          stars: 3,
          image: 'path/to/image-isle.jpg',
        },
      ],
    },
    {
      id: 3,
      name: 'Tropical Madagascar',
      hotels: [
        {
          id: 11,
          name: 'Hôtel Anjajavy',
          description: 'Un havre de paix sur la côte ouest.',
          price: 300000,
          stars: 5,
          image: 'path/to/image-anjajavy.jpg',
        },
        {
          id: 12,
          name: 'Hôtel Sakatia Lodge',
          description: 'Un petit hôtel intime sur l’île de Sakatia.',
          price: 180000,
          stars: 4,
          image: 'path/to/image-sakatia.jpg',
        },
        {
          id: 13,
          name: 'Hôtel Vanila',
          description: 'Hôtel en bord de mer avec des chambres confortables.',
          price: 150000,
          stars: 4,
          image: 'path/to/image-vanila.jpg',
        },
        {
          id: 14,
          name: 'Hôtel Tsara Komba',
          description: 'Un hôtel écologique sur une île privée.',
          price: 250000,
          stars: 5,
          image: 'path/to/image-tsarakomba.jpg',
        },
        {
          id: 15,
          name: 'Hôtel Les Bougainvilliers',
          description: 'Un hôtel charmant à Diego Suarez.',
          price: 90000,
          stars: 3,
          image: 'path/to/image-bougainvilliers.jpg',
        },
      ],
    },
    {
      id: 4,
      name: 'Madagascar Adventure',
      hotels: [
        {
          id: 16,
          name: 'Hôtel La Plage',
          description: 'Hôtel en bord de mer avec un bon restaurant.',
          price: 160000,
          stars: 4,
          image: 'path/to/image-laplage.jpg',
        },
        {
          id: 17,
          name: 'Hôtel Mada Camp',
          description: 'Un camp de luxe au cœur de la nature.',
          price: 220000,
          stars: 5,
          image: 'path/to/image-madacamp.jpg',
        },
        {
          id: 18,
          name: 'Hôtel Les Orchidées',
          description: 'Un hôtel accueillant à Antananarivo.',
          price: 75000,
          stars: 3,
          image: 'path/to/image-orchidees.jpg',
        },
        {
          id: 19,
          name: 'Hôtel Palm Beach',
          description: 'Hôtel idéal pour des vacances en famille.',
          price: 140000,
          stars: 4,
          image: 'path/to/image-palmbeach.jpg',
        },
        {
          id: 20,
          name: 'Hôtel Eden',
          description: 'Un cadre paradisiaque pour se détendre.',
          price: 300000,
          stars: 5,
          image: 'path/to/image-eden.jpg',
        },
      ],
    },
  ]);

  const [filters, setFilters] = useState({ stars: '', price: '' });

  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
  };

  // Logique de filtrage
  const filteredAgencies = agencies.map((agency) => ({
    ...agency,
    hotels: agency.hotels.filter((hotel) => {
      const starMatch = filters.stars ? hotel.stars === parseInt(filters.stars) : true;
      const priceMatch = filters.price ? hotel.price <= parseInt(filters.price) : true;
      return starMatch && priceMatch;
    }),
  })).filter(agency => agency.hotels.length > 0); // Ne garder que les agences avec des hôtels filtrés

  return (
    <div>
      <Header />
      <HotelFilters onFilterChange={handleFilterChange} />
      <HotelCatalog agencies={filteredAgencies} />
      <Footer />
    </div>
  );
};

export default HotelPage;