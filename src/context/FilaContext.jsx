import React, { createContext, useState, useContext } from 'react';

const FilaContext = createContext();

export const FilaProvider = ({ children }) => {
  const [fila, setFila] = useState([]);
  const [ultimaSenha, setUltimaSenha] = useState('A0000');

  const adicionarPaciente = (paciente) => {
    setFila([...fila, { ...paciente, status: 'Aguardando Triagem' }]);
  };

  const gerarProximaSenha = () => {
    const numero = parseInt(ultimaSenha.slice(1)) + 1;
    const novaSenha = `A${String(numero).padStart(4, '0')}`;
    setUltimaSenha(novaSenha);
    return novaSenha;
  };

  const atualizarStatusPaciente = (senha, status) => {
    setFila(fila.map(paciente => (paciente.senha === senha ? { ...paciente, status } : paciente)));
  };

  return (
    <FilaContext.Provider value={{ fila, adicionarPaciente, gerarProximaSenha, atualizarStatusPaciente }}>
      {children}
    </FilaContext.Provider>
  );
};

export const useFila = () => useContext(FilaContext);

export { FilaContext };
