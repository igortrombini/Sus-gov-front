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
  Button,
  ClassificacaoDot
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
        if (paciente.status !== 'Atendimento Médico Concluído') {
          const tempoEspera = Math.floor((new Date() - new Date(paciente.horaEntrada)) / 1000);
          const horas = Math.floor(tempoEspera / 3600);
          const minutos = Math.floor((tempoEspera % 3600) / 60);
          const segundos = tempoEspera % 60;
          novosTempos[paciente.senha] = `${horas}h ${minutos}m ${segundos}s`;

          if (tempoEspera > 1200 && paciente.status === 'Aguardando Triagem') {
            atualizarStatusPaciente(paciente.senha, 'Em Triagem');
          }
        } else {
          novosTempos[paciente.senha] = 'Atendimento Concluído';
        }
      });
      setTempoFila(novosTempos);
    }, 1000);

    return () => clearInterval(interval);
  }, [fila, atualizarStatusPaciente]);

  const handleIniciarAtendimentoMedico = (paciente) => {
    navigate(`/atendimento-medico/${paciente.senha}`, { state: { paciente } });
  };

  const handleEditarPaciente = (paciente) => {
    navigate(`/triagem/${paciente.senha}`, { state: { paciente } });
  };

  const handleVerPaciente = (paciente) => {
    navigate(`/atendimento-medico/${paciente.senha}`, { state: { paciente, viewOnly: true } });
  };

  const filaOrdenada = [...fila].sort((a, b) => {
    const classificacaoOrdem = {
      'Emergência': 1,
      'Muito Urgente': 2,
      'Urgente': 3,
      'Pouco Urgente': 4,
      'Não Urgente': 5
    };
    return classificacaoOrdem[a.classificacao] - classificacaoOrdem[b.classificacao];
  });

  const getColorForClassificacao = (classificacao) => {
    switch (classificacao) {
      case 'Emergência':
        return '#FF0000';
      case 'Muito Urgente':
        return '#FFA500';
      case 'Urgente':
        return '#FFFF00';
      case 'Pouco Urgente':
        return '#00FF00';
      case 'Não Urgente':
        return '#0000FF';
      default:
        return '#FFFFFF';
    }
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
                <Th>Classificação</Th>
                <Th>Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filaOrdenada.map(paciente => (
                <Tr key={paciente.senha}>
                  <Td>{paciente.senha}</Td>
                  <Td>{paciente.nomeCompleto}</Td>
                  <Td>{tempoFila[paciente.senha]}</Td>
                  <Td>Sala 3</Td>
                  <Td>Ana Paula Silva</Td>
                  <Td>Enfermeira</Td>
                  <Td>{paciente.status}</Td>
                  <Td>
                    <ClassificacaoDot classificacao={getColorForClassificacao(paciente.classificacao)} />
                  </Td>
                  <Td>
                    {user.userType === 'enfermagem' && (
                      <Button onClick={() => handleEditarPaciente(paciente)}>
                        Editar
                      </Button>
                    )}
                    {user.userType === 'medico' && (
                      paciente.status === 'Atendimento Médico Concluído' ? (
                        <Button onClick={() => handleVerPaciente(paciente)}>
                          Ver
                        </Button>
                      ) : (
                        <Button onClick={() => handleIniciarAtendimentoMedico(paciente)}>
                          Iniciar Atendimento
                        </Button>
                      )
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
