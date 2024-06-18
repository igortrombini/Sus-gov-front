import React, { createContext, useState, useContext } from 'react';

const FilaContext = createContext();

const FilaProvider = ({ children }) => {
  const [fila, setFila] = useState([]);
  const [ultimaSenha, setUltimaSenha] = useState('A0000');

  const adicionarPaciente = (paciente) => {
    setFila((prevFila) => {
      const updatedFila = [...prevFila, { ...paciente, status: 'Aguardando Triagem', tempoAtendimento: null }];
      console.log('Updated Fila after adicionarPaciente:', updatedFila);
      return updatedFila;
    });
  };

  const gerarProximaSenha = () => {
    const numero = parseInt(ultimaSenha.slice(1)) + 1;
    const novaSenha = `A${String(numero).padStart(4, '0')}`;
    setUltimaSenha(novaSenha);
    return novaSenha;
  };

  const atualizarStatusPaciente = (senha, status, dadosAtualizados) => {
    setFila((prevFila) => {
      const updatedFila = prevFila.map(paciente => 
        paciente.senha === senha 
          ? { ...paciente, ...dadosAtualizados, status, tempoAtendimento: status === 'Atendimento Médico Concluído' ? new Date() : paciente.tempoAtendimento } 
          : paciente
      );
      console.log('Updated Fila after atualizarStatusPaciente:', updatedFila);
      return updatedFila;
    });
  };

  return (
    <FilaContext.Provider value={{ fila, adicionarPaciente, gerarProximaSenha, atualizarStatusPaciente }}>
      {children}
    </FilaContext.Provider>
  );
};

export const useFila = () => useContext(FilaContext);

export { FilaContext, FilaProvider };
