import styled from 'styled-components';

const primaryColor = '#007bff'; // Cor primária do botão
const hoverColor = '#0056b3'; // Cor de hover do botão
const gray500 = '#6b7280'; // Cor cinza para o placeholder
const black = '#000'; // Cor preta
const blueLink = '#1351b4'; // Cor azul para os links

export const Container = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftPanel = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  padding: 0 15rem;
  @media (max-width: 1024px) {
    padding: 0 10rem;
  }
  @media (max-width: 768px) {
    flex: none;
    padding: 1rem;
  }
`;

export const StyledImage = styled.img`
  width: 120%;
  max-width: 1000px;
  height: auto;
  object-fit: cover;
  margin-right: 0;
  @media (max-width: 1024px) {
    width: 100%;
    max-width: 800px;
  }
  @media (max-width: 768px) {
    width: 100%;
    max-width: 600px;
  }
`;

export const RightPanel = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1rem;
  @media (max-width: 1024px) {
    justify-content: center;
  }
  @media (max-width: 768px) {
    justify-content: center;
    padding: 1rem;
  }
`;

export const LoginBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  width: 24rem;
  font-family: 'Rawline', sans-serif;
  @media (max-width: 1024px) {
    width: 20rem;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: ${black};
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
    pointer-events: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding-left: 2.5rem;
  padding-right: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  font-family: 'Rawline', sans-serif;
  &::placeholder {
    font-family: 'Rawline', sans-serif;
    color: ${gray500};
    padding-left: 0.8rem;
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
  background-color: ${primaryColor};
  color: white;
  &:hover {
    background-color: ${hoverColor};
  }
`;

export const ForgotPassword = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: ${black};
  font-size: 0.75rem;

  a {
    color: ${blueLink};
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const RememberMe = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: ${black};

  input {
    margin-right: 0.5rem;
  }
`;
