import React from 'react';
import Header from '../components/Header';
import ServiceList from '../components/ServiceList';
import Footer from '../components/Footer';
const HomePage = () => {
  const titleStyle = {
    textAlign: 'center',
    color: '#007bff', // Couleur du titre
    margin: '20px 0', // Marge autour du titre
    fontSize: '2rem', // Taille de la police
  };
  const contain = {
    textAlign: 'center',  
  };
  return (
    <div>
      <Header />
      <div>
        <h2 style={titleStyle}>Bienvenu</h2>
      </div>
      <div style={contain}>
        <ServiceList />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;