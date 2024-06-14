import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import NewsCard from '../../components/NewsCard/NewsCard';
import { Container, MainContent, Section, NewsGrid } from './Home.styles';
import dengueImage from '../../assets/dengue.jpg';
import sarampoImage from '../../assets/sarampo.jpg';
import higieneImage from '../../assets/higiene.jpg';
import atendimentoImage from '../../assets/atendimento.jpg';

const Home = () => {
  const [currentSection, setCurrentSection] = useState('novidades');

  const renderSection = () => {
    switch (currentSection) {
      case 'novidades':
        return (
          <Section>
            <h2>Novidades</h2>
            <NewsGrid>
              <NewsCard
                title="Como se prevenir da Dengue"
                text="A dengue é uma doença transmitida pelo mosquito Aedes aegypti. Para se prevenir, é importante eliminar os focos de água parada onde o mosquito pode se reproduzir. Utilize repelentes, instale telas nas janelas e portas, e evite deixar recipientes com água descoberta."
                image={dengueImage}
                link="/dengue"
              />
              <NewsCard
                title="Semana da Vacinação do Sarampo"
                text="Participe da Semana da Vacinação do Sarampo. A vacinação é a maneira mais eficaz de prevenir o sarampo, uma doença altamente contagiosa. Procure a unidade de saúde mais próxima e garanta a proteção de toda a família."
                image={sarampoImage}
                link="/sarampo"
              />
              <NewsCard
                title="Cuidados de Higiene"
                text="Manter bons hábitos de higiene é essencial para a saúde. Lave as mãos frequentemente, especialmente antes das refeições e após usar o banheiro. Utilize álcool em gel quando não houver água e sabão disponíveis. Cuide da higiene pessoal e evite compartilhar objetos de uso pessoal."
                image={higieneImage}
                link="/higiene"
              />
              <NewsCard
                title="Como Fazer um Atendimento de Qualidade"
                text="Um bom atendimento é fundamental para a satisfação dos pacientes. Seja empático, ouça atentamente as necessidades de cada pessoa, e forneça informações claras e precisas. Trate todos com respeito e cordialidade, garantindo uma experiência positiva e humanizada."
                image={atendimentoImage}
                link="/atendimento"
              />
            </NewsGrid>
          </Section>
        );
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
