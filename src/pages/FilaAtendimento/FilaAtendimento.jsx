import React, { useContext, useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import {
  Container,
  MainContent,
  Section,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td
} from './FilaAtendimento.styles';
import { FilaContext } from '../../context/FilaContext';

const FilaAtendimento = () => {
  const { fila } = useContext(FilaContext);
  const [tempoFila, setTempoFila] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const novosTempos = {};
      fila.forEach(paciente => {
        const tempoEspera = Math.floor((new Date() - new Date(paciente.horaEntrada)) / 1000);
        const horas = Math.floor(tempoEspera / 3600);
        const minutos = Math.floor((tempoEspera % 3600) / 60);
        const segundos = tempoEspera % 60;
        novosTempos[paciente.senha] = `${horas}h ${minutos}m ${segundos}s`;
      });
      setTempoFila(novosTempos);
    }, 1000);

    return () => clearInterval(interval);
  }, [fila]);

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <Header />
        <Section>
          <h2>Fila de Atendimento</h2>
          <Table>
            <Thead>
              <Tr>
                <Th>Senha</Th>
                <Th>Nome Completo</Th>
                <Th>Tempo na Fila</Th>
                <Th>Sala</Th>
                <Th>Atendente</Th>
                <Th>Cargo</Th>
              </Tr>
            </Thead>
            <Tbody>
              {fila.map(paciente => (
                <Tr key={paciente.senha}>
                  <Td>{paciente.senha}</Td>
                  <Td>{paciente.nomeCompleto}</Td>
                  <Td>{tempoFila[paciente.senha]}</Td>
                  <Td>Sala 3</Td>
                  <Td>Ana Paula Silva</Td>
                  <Td>Enfermeira</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Section>
      </MainContent>
    </Container>
  );
};

export default FilaAtendimento;
