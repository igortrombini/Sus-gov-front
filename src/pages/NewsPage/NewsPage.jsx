// src/pages/NewsPage/NewsPage.jsx
import React from 'react';
import NewsCard from '../../components/NewsCard/NewsCard';
import { Container, NewsSection, NewsGrid } from './NewsPage.styles';

const NewsPage = () => {
  return (
    <Container>
      <NewsSection>
        <h2>Novidades</h2>
        <NewsGrid>
          <NewsCard title="Novidades 1" />
          <NewsCard title="Novidades 2" />
          <NewsCard title="Novidades 3" />
          <NewsCard title="Novidades 4" />
        </NewsGrid>
      </NewsSection>
    </Container>
  );
};

export default NewsPage;
