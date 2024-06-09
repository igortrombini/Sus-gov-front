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
  justify-content: flex-start; /* Ajuste conforme necessário */
  align-items: center; /* Centraliza horizontalmente */
  padding: 2rem;
  margin-top: 0rem; /* Ajuste conforme necessário */
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  font-size: 1rem;
`;

export const Button = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  background-color: #007bff; /* Azul padrão */
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #0056b3; /* Azul mais escuro para hover */
  }
`;

export const PatientDetails = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  width: 100%;
  max-width: 600px;
`;

export const DetailRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  label {
    font-weight: bold;
  }
  span {
    margin-top: 0.25rem;
  }
`;

export const ActionButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const ActionButton = styled(Button)`
  flex: 1;
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;
