// src/pages/IniciarAtendimento/IniciarAtendimento.jsx
import React, { useState } from 'react';
import {
  Container,
  FormSection,
  InputWrapper,
  Label,
  Input,
  Button,
} from './IniciarAtendimento.styles';

const IniciarAtendimento = () => {
  const [paciente, setPaciente] = useState({
    nomeCompleto: '',
    cpf: '',
    numeroCns: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaciente({ ...paciente, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementar a lógica de submissão do formulário
  };

  return (
    <Container>
      <h2>Iniciar Atendimento</h2>
      <FormSection onSubmit={handleSubmit}>
        <InputWrapper>
          <Label htmlFor="nomeCompleto">Nome Completo</Label>
          <Input
            id="nomeCompleto"
            name="nomeCompleto"
            type="text"
            value={paciente.nomeCompleto}
            onChange={handleInputChange}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="cpf">CPF</Label>
          <Input
            id="cpf"
            name="cpf"
            type="text"
            value={paciente.cpf}
            onChange={handleInputChange}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="numeroCns">CNS</Label>
          <Input
            id="numeroCns"
            name="numeroCns"
            type="text"
            value={paciente.numeroCns}
            onChange={handleInputChange}
            required
          />
        </InputWrapper>
        <Button type="submit">Buscar</Button>
      </FormSection>
    </Container>
  );
};

export default IniciarAtendimento;
