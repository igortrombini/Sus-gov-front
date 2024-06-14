import React, { memo } from 'react';
import { Tr, Td } from './FilaAtendimento.styles';

const formatTime = (seconds) => {
  const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
  const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${h}:${m}:${s}`;
};

const PacienteRow = ({ paciente }) => (
  <Tr>
    <Td>{paciente.senha}</Td>
    <Td>{paciente.nomeCompleto}</Td>
    <Td>{formatTime(paciente.tempoFila)}</Td>
    <Td>Sala 3</Td>
    <Td>Ana Paula Silva</Td>
    <Td>Enfermeira</Td>
  </Tr>
);

export default memo(PacienteRow);
