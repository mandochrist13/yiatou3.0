import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    personal: {
      civility: "Monsieur",
      firstName: "Dave",
      lastName: "Anguilet",
      email: "abcdef@gmail.com",
      phone: "066038083",
      status: "Employé",
      birthDate: "18/02/1998"
    },
    // ... autres données utilisateur
  });

  const updateUserData = (section, newData) => {
    setUserData(prev => ({
      ...prev,
      [section]: newData
    }));
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}; 