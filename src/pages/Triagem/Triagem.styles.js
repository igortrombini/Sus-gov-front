import styled from 'styled-components';

const primaryColor = '#0A3D62'; // Tom de azul da sidebar

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
  h3.section-title {
    font-size: 1.2rem;
    background-color: #f8f9fa;
    height: 2.5rem;
    display: flex;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 1rem;
    position: relative;
    width: calc(100% + 4rem);
    margin-left: -2rem;
    padding-left: 2rem;
    box-sizing: border-box;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 8px; /* Adicionado */
  align-items: flex-start;
  width: 100%; /* Adicionado */
  label {
    margin-bottom: 0.5rem;
    text-align: left;
    font-weight: bold;
    width: 100%;
  }
`;

export const SearchWrapper = styled(InputWrapper)`
  grid-column: span 2;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  font-size: 1rem;
  width: 100%;
`;

export const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  font-size: 1rem;
  width: 100%;
  height: 5rem;
  resize: none; /* Desabilita o redimensionamento */
`;

export const TextAreaSintomas = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  font-size: 1rem;
  width: 100%;
  height: 10rem; /* Altura diferente para sintomas */
  resize: none; /* Desabilita o redimensionamento */
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${primaryColor};
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  height: 100%;
  outline: none; /* Remove o foco */
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const GenderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-column: span 2;
`;

export const GenderOptions = styled.div`
  display: flex;
  flex-direction: row;
  label {
    margin-right: 1rem;
    display: flex;
    align-items: center;
    input {
      margin-right: 0.25rem;
    }
  }
`;

export const AddressWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  grid-column: span 2;
  width: 100%;
`;

export const ActionButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  grid-column: span 2;
  margin-top: 2rem;
`;

export const ActionButton = styled.button`
  background-color: ${primaryColor};
  border: none;
  color: white;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  border-radius: 2rem;
  margin: 0 0.5rem;
  outline: none; /* Remove o foco */
  &:hover {
    background-color: #0056b3;
  }
`;

export const ButtonCancel = styled.button`
  background-color: transparent;
  border: 1px solid ${primaryColor};
  color: ${primaryColor};
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  border-radius: 2rem;
  margin: 0 0.5rem;
  outline: none; /* Remove o foco */
  &:hover {
    background-color: #e6f2ff;
  }
`;

export const Divider = styled.div`
  grid-column: span 2;
  font-size: 1.2rem;
  background-color: #f8f9fa;
  height: 2.5rem;
  display: flex;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
  position: relative;
  width: calc(100% + 4rem);
  margin-left: -2rem;
  padding-left: 2rem;
  box-sizing: border-box;
`;

export const DividerText = styled.div`
  background-color: #f8f9fa;
  padding: 0 1rem;
  font-weight: bold;
  color: ${primaryColor};
  position: absolute;
`;

export const AlergiasWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: span 2;
  padding: 8px; /* Adicionado */
  label {
    display: flex;
    align-items: center;
    margin-right: 1rem;
  }
  div {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
`;
