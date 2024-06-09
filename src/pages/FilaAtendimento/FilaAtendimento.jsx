import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { Container, MainContent, Section } from './FilaAtendimento.styles';

const FilaAtendimento = () => {
  return (
    <Container>
      <Sidebar />
      <MainContent>
        <Header />
        <Section>
          <h2>Fila de Atendimento</h2>
          {/* Adicione o conteúdo da fila de atendimento aqui */}
        </Section>
      </MainContent>
    </Container>
  );
};

export default FilaAtendimento;
