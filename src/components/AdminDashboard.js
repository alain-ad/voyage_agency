import React, { useState } from 'react';
import '../styles/components.css';

const AdminDashboard = () => {
  const [agencies, setAgencies] = useState([]);
  const [newAgency, setNewAgency] = useState({ name: '', description: '' });
  const [editAgencyIndex, setEditAgencyIndex] = useState(null);
  const [newHotel, setNewHotel] = useState({ name: '', description: '', price: '', stars: '' });
  const [editHotelIndex, setEditHotelIndex] = useState(null);
  const [currentAgencyIndex, setCurrentAgencyIndex] = useState(null);

  const handleAgencyInputChange = (e) => {
    const { name, value } = e.target;
    setNewAgency({ ...newAgency, [name]: value });
  };

  const handleAddAgency = () => {
    if (editAgencyIndex !== null) {
      const updatedAgencies = agencies.map((agency, index) =>
        index === editAgencyIndex ? newAgency : agency
      );
      setAgencies(updatedAgencies);
      setEditAgencyIndex(null);
    } else {
      setAgencies([...agencies, { ...newAgency, id: Date.now(), hotels: [] }]);
    }
    setNewAgency({ name: '', description: '' });
  };

  const handleEditAgency = (index) => {
    setNewAgency(agencies[index]);
    setEditAgencyIndex(index);
  };

  const handleDeleteAgency = (index) => {
    const updatedAgencies = agencies.filter((_, i) => i !== index);
    setAgencies(updatedAgencies);
  };

  const handleHotelInputChange = (e) => {
    const { name, value } = e.target;
    setNewHotel({ ...newHotel, [name]: value });
  };

  const handleAddHotel = () => {
    if (editHotelIndex !== null) {
      const updatedHotels = agencies[currentAgencyIndex].hotels.map((hotel, index) =>
        index === editHotelIndex ? newHotel : hotel
      );
      const updatedAgencies = agencies.map((agency, index) =>
        index === currentAgencyIndex ? { ...agency, hotels: updatedHotels } : agency
      );
      setAgencies(updatedAgencies);
      setEditHotelIndex(null);
    } else {
      const updatedAgencies = agencies.map((agency, index) =>
        index === currentAgencyIndex ? { ...agency, hotels: [...agency.hotels, { ...newHotel, id: Date.now() }] } : agency
      );
      setAgencies(updatedAgencies);
    }
    setNewHotel({ name: '', description: '', price: '', stars: '' });
  };

  const handleEditHotel = (agencyIndex, hotelIndex) => {
    setCurrentAgencyIndex(agencyIndex);
    setNewHotel(agencies[agencyIndex].hotels[hotelIndex]);
    setEditHotelIndex(hotelIndex);
  };

  const handleDeleteHotel = (agencyIndex, hotelIndex) => {
    const updatedHotels = agencies[agencyIndex].hotels.filter((_, i) => i !== hotelIndex);
    const updatedAgencies = agencies.map((agency, index) =>
      index === agencyIndex ? { ...agency, hotels: updatedHotels } : agency
    );
    setAgencies(updatedAgencies);
  };

  return (
    <div className="admin-dashboard">
      <h2>Panneau d'Administration</h2>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Nom de l'agence"
          value={newAgency.name}
          onChange={handleAgencyInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newAgency.description}
          onChange={handleAgencyInputChange}
        />
        <button onClick={handleAddAgency}>
          {editAgencyIndex !== null ? 'Mettre à jour l\'agence' : 'Ajouter l\'agence'}
        </button>
      </div>

      <h3>Liste des Agences</h3>
      <ul>
        {agencies.map((agency, agencyIndex) => (
          <li key={agency.id}>
            <h4>{agency.name}</h4>
            <p>{agency.description}</p>
            <button onClick={() => handleEditAgency(agencyIndex)}>Modifier</button>
            <button onClick={() => handleDeleteAgency(agencyIndex)}>Supprimer</button>

            <div>
              <h5>Hôtels associés</h5>
              <input
                type="text"
                name="name"
                placeholder="Nom de l'hôtel"
                value={newHotel.name}
                onChange={handleHotelInputChange}
              />
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={newHotel.description}
                onChange={handleHotelInputChange}
              />
              <input
                type="number"
                name="price"
                placeholder="Prix"
                value={newHotel.price}
                onChange={handleHotelInputChange}
              />
              <select
                name="stars"
                value={newHotel.stars}
                onChange={handleHotelInputChange}
              >
                <option value="">Étoiles</option>
                <option value="1">1 étoile</option>
                <option value="2">2 étoiles</option>
                <option value="3">3 étoiles</option>
                <option value="4">4 étoiles</option>
                <option value="5">5 étoiles</option>
              </select>
              <button onClick={() => {
                setCurrentAgencyIndex(agencyIndex);
                handleAddHotel();
              }}>
                {editHotelIndex !== null ? 'Mettre à jour l\'hôtel' : 'Ajouter l\'hôtel'}
              </button>

              <ul>
                {agency.hotels.map((hotel, hotelIndex) => (
                  <li key={hotel.id}>
                    <h6>{hotel.name}</h6>
                    <p>{hotel.description}</p>
                    <p>Prix: {hotel.price} €</p>
                    <p>Étoiles: {hotel.stars}</p>
                    <button onClick={() => handleEditHotel(agencyIndex, hotelIndex)}>Modifier</button>
                    <button onClick={() => handleDeleteHotel(agencyIndex, hotelIndex)}>Supprimer</button>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;