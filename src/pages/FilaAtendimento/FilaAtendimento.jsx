import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import {
  Container,
  MainContent,
  Section,
  QueueTable,
  TableHeader,
  TableRow,
  TableCell,
  PriorityIndicator,
  Timer
} from './FilaAtendimento.styles';

const FilaAtendimento = () => {
  // Dados de exemplo para a fila de atendimento
  const filaDeAtendimento = [
    { senha: 'A001', nome: 'João Silva', status: 'Em Atendimento Triagem', prioridade: 'normal', tempo: 0, profissional: 'Enfermeira Ana', especialidade: 'Enfermeira', sala: '3' },
    { senha: 'A002', nome: 'Maria Souza', status: 'Aguardando Atendimento Médico', prioridade: 'prioritario', tempo: 0, profissional: 'Médico Clínico Geral Osvaldo', especialidade: 'Clínico Geral', sala: 'Aguardando' },
    { senha: 'A003', nome: 'Carlos Pereira', status: 'Em Atendimento Médico', prioridade: 'urgencia', tempo: 0, profissional: 'Médico Emergencista Eduardo', especialidade: 'Emergencista', sala: '5' },
    { senha: 'A004', nome: 'Ana Oliveira', status: 'Aguardando Triagem', prioridade: 'normal', tempo: 0, profissional: 'Enfermeira Raissa', especialidade: 'Enfermeira', sala: 'Aguardando' },
    { senha: 'A005', nome: 'Pedro Santos', status: 'Aguardando Atendimento Médico', prioridade: 'urgencia', tempo: 0, profissional: 'Médico Clínico Geral Rafael', especialidade: 'Clínico Geral', sala: 'Aguardando' },
    { senha: 'A006', nome: 'Clara Lima', status: 'Aguardando Triagem', prioridade: 'prioritario', tempo: 0, profissional: 'Enfermeira Marina', especialidade: 'Enfermeira', sala: 'Aguardando' },
    { senha: 'A007', nome: 'Lucas Mendes', status: 'Em Atendimento Médico', prioridade: 'normal', tempo: 0, profissional: 'Médico Clínico Geral Carlos', especialidade: 'Clínico Geral', sala: '1' },
  ];

  const [fila, setFila] = useState(filaDeAtendimento);

  useEffect(() => {
    const interval = setInterval(() => {
      setFila(prevFila => {
        let hasUrgency = false;
        const updatedFila = prevFila.map(paciente => {
          if (paciente.status !== 'Concluído') {
            if (paciente.prioridade === 'urgencia') {
              hasUrgency = true;
            }
            return { ...paciente, tempo: paciente.tempo + 1 };
          }
          return paciente;
        });

        if (hasUrgency) {
          return updatedFila.map(paciente => {
            if (paciente.prioridade !== 'urgencia' && paciente.status === 'Aguardando Atendimento Médico') {
              return { ...paciente, tempo: paciente.tempo + 5 };
            }
            return paciente;
          });
        }

        return updatedFila;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const getColorForTime = (tempo, status) => {
    const limit = 300; // 5 minutos em segundos
    if (tempo > limit) {
      return 'orange';
    }
    return 'black';
  };

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <Header />
        <Section>
          <h2>Fila de Atendimento</h2>
          <QueueTable>
            <thead>
              <TableRow>
                <TableHeader>Senha</TableHeader>
                <TableHeader>Sala</TableHeader>
                <TableHeader>Nome</TableHeader>
                <TableHeader>Status</TableHeader>
                <TableHeader>Prioridade</TableHeader>
                <TableHeader>Tempo</TableHeader>
                <TableHeader>Profissional</TableHeader>
                <TableHeader>Especialidade</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {fila.map((paciente, index) => (
                <TableRow key={index}>
                  <TableCell>{paciente.senha}</TableCell>
                  <TableCell>{paciente.sala}</TableCell>
                  <TableCell>{paciente.nome}</TableCell>
                  <TableCell>{paciente.status}</TableCell>
                  <TableCell>
                    <PriorityIndicator prioridade={paciente.prioridade} />
                  </TableCell>
                  <TableCell>
                    <Timer tempo={paciente.tempo} color={getColorForTime(paciente.tempo, paciente.status)}>
                      {formatTime(paciente.tempo)}
                    </Timer>
                  </TableCell>
                  <TableCell>{paciente.profissional}</TableCell>
                  <TableCell>{paciente.especialidade}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </QueueTable>
        </Section>
      </MainContent>
    </Container>
  );
};

export default FilaAtendimento;
