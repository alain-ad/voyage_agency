import React from 'react';
import Header from '../components/Header';
import ServiceList from '../components/ServiceList';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <ServiceList />
      <Footer />
    </div>
  );
};

export default HomePage;