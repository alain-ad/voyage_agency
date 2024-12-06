import React, { useState } from 'react';
// import 
import '../styles/components.css';

const AdminDashboard = () => {
  const [hotels, setHotels] = useState([]);
  const [newHotel, setNewHotel] = useState({ name: '', description: '', price: '', stars: '' });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHotel({ ...newHotel, [name]: value });
  };

  const handleAddHotel = () => {
    if (editIndex !== null) {
      const updatedHotels = hotels.map((hotel, index) =>
        index === editIndex ? newHotel : hotel
      );
      setHotels(updatedHotels);
      setEditIndex(null);
    } else {
      setHotels([...hotels, { ...newHotel, id: Date.now() }]);
    }
    setNewHotel({ name: '', description: '', price: '', stars: '' });
  };

  const handleEditHotel = (index) => {
    setNewHotel(hotels[index]);
    setEditIndex(index);
  };

  const handleDeleteHotel = (index) => {
    const updatedHotels = hotels.filter((_, i) => i !== index);
    setHotels(updatedHotels);
  };

  return (
    <div className="admin-dashboard">
      <h2>Panneau d'Administration</h2>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Nom de l'hôtel"
          value={newHotel.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newHotel.description}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Prix"
          value={newHotel.price}
          onChange={handleInputChange}
        />
        <select
          name="stars"
          value={newHotel.stars}
          onChange={handleInputChange}
        >
          <option value="">Étoiles</option>
          <option value="1">1 étoile</option>
          <option value="2">2 étoiles</option>
          <option value="3">3 étoiles</option>
          <option value="4">4 étoiles</option>
          <option value="5">5 étoiles</option>
        </select>
        <button onClick={handleAddHotel}>
          {editIndex !== null ? 'Mettre à jour' : 'Ajouter'}
        </button>
      </div>

      <h3>Liste des Hôtels</h3>
      <ul>
        {hotels.map((hotel, index) => (
          <li key={hotel.id}>
            <h4>{hotel.name}</h4>
            <p>{hotel.description}</p>
            <p>Prix: {hotel.price} €</p>
            <p>Étoiles: {hotel.stars}</p>
            <button onClick={() => handleEditHotel(index)}>Modifier</button>
            <button onClick={() => handleDeleteHotel(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;