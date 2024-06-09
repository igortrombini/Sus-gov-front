import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw; /* Garante que o container ocupe toda a largura da tela */
  box-sizing: border-box; /* Inclui o padding na largura total */
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%; /* Garante que o MainContent ocupe toda a largura */
  overflow: auto; /* Permite rolagem se o conteúdo for maior que a tela */
`;

export const Section = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;
