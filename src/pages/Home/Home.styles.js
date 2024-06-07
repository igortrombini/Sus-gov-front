import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const NewsSection = styled.section`
  padding: 2rem;
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

export const ButtonGroup = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`;
