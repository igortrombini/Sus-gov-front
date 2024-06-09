import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftPanel = styled.div`
  flex: 1.5; /* Ajuste conforme necessário */
  display: flex;
  align-items: center;
  justify-content: center; /* Ajuste para centralizar a imagem */
  background-color: white; /* Fundo branco para a imagem */
  color: black;
  padding: 0 15rem; /* Ajuste conforme necessário para ter uma borda com o final da tela */
  @media (max-width: 768px) {
    flex: none;
    padding: 1rem;
  }
`;

export const StyledImage = styled.img`
  width: 120%; /* Aumente a largura da imagem conforme necessário */
  max-width: 1000px; /* Ajuste conforme necessário */
  height: auto;
  object-fit: cover; /* Ajusta a imagem para cobrir o contêiner */
  margin-right: 0; /* Remova o margin-right para alinhar a imagem */
  @media (max-width: 768px) {
    width: 100%;
    max-width: 600px;
  }
`;

export const RightPanel = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Ajuste para alinhar o formulário à esquerda */
  padding-left: 1rem; /* Ajuste conforme necessário */
  @media (max-width: 768px) {
    justify-content: center;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const LoginBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  width: 24rem;
  font-family: 'Rawline', sans-serif;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #000; /* Cor preta pure-100 */
`;

export const Form = styled.form``;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;

  .icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #4a5568;
    pointer-events: none; /* Impede que o ícone seja clicado */
  }
`;

export const Input = styled.input`
  width: 100%;
  padding-left: 2.5rem; /* Espaço para o ícone */
  padding-right: 0.5rem; /* Espaço para o texto */
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  font-family: 'Rawline', sans-serif;
  &::placeholder {
    font-family: 'Rawline', sans-serif;
    color: #6b7280; /* Cor gray-500 */
    padding-left: 0.8rem; /* Espaço entre o ícone e o texto */
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.5);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  background-color: #007bff; /* Altere conforme a cor padrão do Design System */
  color: white;
  &:hover {
    background-color: #0056b3; /* Altere conforme a cor de hover do Design System */
  }
`;

export const ForgotPassword = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: #000; /* Cor preta pure-100 */
  font-size: 0.75rem; /* Reduzido o tamanho da fonte */

  a {
    color: #1351b4;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const RememberMe = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #000; /* Cor preta pure-100 */

  input {
    margin-right: 0.5rem;
  }
`;
