// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import HomePage from './pages/HomePage';
import HotelPage from './pages/HotelPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import Auth from './components/Auth'; // Assurez-vous d'importer le composant Auth
import './styles/App.css';

const App = () => {
  const [showAuth, setShowAuth] = useState(false); // État pour gérer l'affichage de l'authentification

  const handleAdminClick = () => {
    setShowAuth(true); // Affiche le composant d'authentification lors du clic sur Admin
  };

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hotels" element={<HotelPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route 
            path="/admin" 
            element={
              <RequireAuth showAuth={showAuth} setShowAuth={setShowAuth} onAdminClick={handleAdminClick} />
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

// Composant pour gérer l'accès à la page Admin
const RequireAuth = ({ showAuth, setShowAuth, onAdminClick }) => {
  const { currentUser } = useAuth(); // Récupère l'utilisateur authentifié

  if (showAuth && !currentUser) {
    return <Auth onClose={() => setShowAuth(false)} />;
  }

  return currentUser ? <AdminPage /> : onAdminClick();
};

export default App;

