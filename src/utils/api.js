import axios from 'axios';

const API_URL = 'https://api.example.com'; // Remplacez par votre URL d'API

export const fetchHotels = async () => {
  const response = await axios.get(`${API_URL}/hotels`);
  return response.data;
};

// Ajoutez d'autres fonctions d'API si nécessaire