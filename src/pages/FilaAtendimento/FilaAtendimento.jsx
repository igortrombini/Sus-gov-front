import React, { useContext, useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { AuthContext } from '../../context/AuthContext';
import {
  Container,
  MainContent,
  Section,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  Button
} from './FilaAtendimento.styles';
import { FilaContext } from '../../context/FilaContext';

const FilaAtendimento = () => {
  const { fila, atualizarStatusPaciente } = useContext(FilaContext);
  const { user } = useContext(AuthContext);
  const [tempoFila, setTempoFila] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      const novosTempos = {};
      fila.forEach(paciente => {
        const tempoEspera = Math.floor((new Date() - new Date(paciente.horaEntrada)) / 1000);
        const horas = Math.floor(tempoEspera / 3600);
        const minutos = Math.floor((tempoEspera % 3600) / 60);
        const segundos = tempoEspera % 60;
        novosTempos[paciente.senha] = `${horas}h ${minutos}m ${segundos}s`;

        if (tempoEspera > 1200 && paciente.status === 'Aguardando Triagem') {
          atualizarStatusPaciente(paciente.senha, 'Em Triagem');
        }
      });
      setTempoFila(novosTempos);
    }, 1000);

    return () => clearInterval(interval);
  }, [fila, atualizarStatusPaciente]);

  const handleIniciarTriagem = (paciente) => {
    navigate(`/triagem/${paciente.senha}`, { state: { paciente } });
  };

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
                <Th>Status</Th>
                <Th>Ações</Th>
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
                  <Td>{paciente.status}</Td>
                  <Td>
                    {user.userType === 'enfermagem' && paciente.status === 'Aguardando Triagem' && (
                      <Button onClick={() => handleIniciarTriagem(paciente)}>
                        Fazer Triagem
                      </Button>
                    )}
                    {user.userType === 'recepcao' && paciente.status === 'Aguardando Triagem' && (
                      <Button disabled>
                        Fazer Triagem
                      </Button>
                    )}
                  </Td>
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
