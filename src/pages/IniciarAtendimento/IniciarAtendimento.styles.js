// src/pages/IniciarAtendimento/IniciarAtendimento.styles.js
import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  font-family: 'Rawline', sans-serif;
  max-width: 800px;
  margin: auto;
`;

export const FormSection = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: span 2;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const Button = styled.button`
  grid-column: span 2;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
