import React from 'react';
import Header from '../components/Header';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import ContactInfo from '../components/ContactInfo'; // Ajouté

const ContactPage = () => {
  return (
    <div>
      <Header />
      <ContactUs />
      <ContactInfo /> {/* Ajouté */}
      <Footer />
    </div>
  );
};

export default ContactPage;