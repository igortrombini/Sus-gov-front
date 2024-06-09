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
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
  margin-top: 0rem;
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const QueueTable = styled.table`
  width: 100%;
  max-width: 800px;
  border-collapse: collapse;
  margin-top: 2rem;
`;

export const TableHeader = styled.th`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  background-color: #f1f3f5;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f9fa;
  }
`;

export const TableCell = styled.td`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
`;

export const PriorityIndicator = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${({ prioridade }) =>
    prioridade === 'urgencia' ? 'red' :
    prioridade === 'prioritario' ? 'yellow' :
    'green'};
`;

export const Timer = styled.div`
  color: ${({ color }) => color};
`;
