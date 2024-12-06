import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null); // État d'erreur
  const [loading, setLoading] = useState(false); // État de chargement

  const login = async (email, password) => {
    setLoading(true);
    setError(null); // Réinitialiser l'erreur

    // Logique d'authentification ici (API, etc.)
    // Simulez un appel API avec setTimeout pour le chargement
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'rams@example.com' && password === 'tafa') {
          setCurrentUser({ email });
          resolve();
        } else {
          reject(new Error('Identifiants incorrects'));
        }
      }, 1000);
    }).catch(err => {
      setError(err.message); // Gérer l'erreur
    });

    setLoading(false);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, error, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};