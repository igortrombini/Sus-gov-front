// src/pages/Home/Home.jsx
import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import NewsCard from '../../components/NewsCard/NewsCard';
import { Container, MainContent, Section, NewsGrid } from './Home.styles';

const Home = () => {
  const [currentSection, setCurrentSection] = useState('novidades');

  const renderSection = () => {
    switch (currentSection) {
      case 'novidades':
        return (
          <Section>
            <h2>Novidades</h2>
            <NewsGrid>
              <NewsCard title="Novidades 1" />
              <NewsCard title="Novidades 2" />
              <NewsCard title="Novidades 3" />
              <NewsCard title="Novidades 4" />
            </NewsGrid>
          </Section>
        );
      // Adicione outras seções conforme necessário
      default:
        return null;
    }
  };

  return (
    <Container>
      <Sidebar setCurrentSection={setCurrentSection} />
      <MainContent>
        <Header />
        {renderSection()}
      </MainContent>
    </Container>
  );
};

export default Home;
