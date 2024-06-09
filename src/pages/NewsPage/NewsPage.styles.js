// src/pages/NewsPage/NewsPage.styles.js
import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const NewsSection = styled.section`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;
