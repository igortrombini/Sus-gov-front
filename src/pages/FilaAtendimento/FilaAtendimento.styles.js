import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: auto;
`;

export const Section = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  margin-top: -1rem;
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
`;

export const Thead = styled.thead`
  background-color: #f8f9fa;
`;

export const Tbody = styled.tbody``;

export const Th = styled.th`
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #dee2e6;
  font-weight: bold;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f8f9fa;
  }
`;

export const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
`;
