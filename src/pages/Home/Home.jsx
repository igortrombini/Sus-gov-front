import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import NewsCard from '../../components/NewsCard/NewsCard';
import {
  Container,
  MainContent,
  NewsSection,
  NewsGrid,
  ButtonGroup,
} from './Home.styles';

const Home = () => {
  return (
    <Container>
      <Sidebar />
      <MainContent>
        <Header />
        <NewsSection>
          <h2>Novidades</h2>
          <NewsGrid>
            <NewsCard title="Novidades 1" />
            <NewsCard title="Novidades 2" />
            <NewsCard title="Novidades 3" />
            <NewsCard title="Novidades 4" />
          </NewsGrid>
          <ButtonGroup>
            <button className="br-button tertiary">Tertiary Button</button>
            <button className="br-button secondary">Secondary Button</button>
            <button className="br-button primary">Primary Button</button>
          </ButtonGroup>
        </NewsSection>
      </MainContent>
    </Container>
  );
};

export default Home;
