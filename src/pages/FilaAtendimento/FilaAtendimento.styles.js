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
`;

export const Thead = styled.thead`
  background-color: #f8f9fa;
`;

export const Tbody = styled.tbody`
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const Th = styled.th`
  padding: 0.75rem;
  text-align: left;
  border-bottom: 2px solid #dee2e6;
`;

export const Tr = styled.tr``;

export const Td = styled.td`
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #dee2e6;
`;

export const Button = styled.button`
  background-color: #0A3D62;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 0.25rem;
  &:hover {
    background-color: #083358;
  }
`;

export const ClassificacaoDot = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ classificacao }) => classificacao};
`;
