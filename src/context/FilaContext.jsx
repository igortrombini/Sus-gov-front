import React, { createContext, useState, useCallback, useEffect } from 'react';

export const FilaContext = createContext();

export const FilaProvider = ({ children }) => {
  const [fila, setFila] = useState([]);
  const [ultimaSenha, setUltimaSenha] = useState('A0000');

  const adicionarPaciente = useCallback((paciente) => {
    setFila((prevFila) => [...prevFila, paciente]);
  }, []);

  const gerarProximaSenha = useCallback(() => {
    const numero = parseInt(ultimaSenha.slice(1)) + 1;
    const novaSenha = `A${String(numero).padStart(4, '0')}`;
    setUltimaSenha(novaSenha);
    return novaSenha;
  }, [ultimaSenha]);

  return (
    <FilaContext.Provider value={{ fila, adicionarPaciente, gerarProximaSenha }}>
      {children}
    </FilaContext.Provider>
  );
};
