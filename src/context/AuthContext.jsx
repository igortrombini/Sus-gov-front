import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

const users = [
  { username: 'recepcao', password: 'senha123', userType: 'recepcao' },
  { username: 'medico', password: 'senha123', userType: 'medico' },
  { username: 'enfermagem', password: 'senha123', userType: 'enfermagem' }
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    const foundUser = users.find(user => user.username === username && user.password === password);
    if (foundUser) {
      setUser(foundUser);
      return true; // Indica login bem-sucedido
    } else {
      return false; // Indica falha no login
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContext };
