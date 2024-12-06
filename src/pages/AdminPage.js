import React from 'react';
import Header from '../components/Header';
import AdminDashboard from '../components/AdminDashboard.js';
import Footer from '../components/Footer';
;

const AdminPage = () => {
    return (
      <div>
        <Header />
        <AdminDashboard />
        <Footer />
      </div>
    );
  };
  
  export default AdminPage;