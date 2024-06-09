import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import {
  Container,
  MainContent,
  Section,
  Form,
  InputWrapper,
  Input,
  Button,
  PatientDetails,
  DetailRow,
  ActionButton
} from './IniciarAtendimento.styles';

const IniciarAtendimento = () => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [cpf, setCpf] = useState('');
  const [cns, setCns] = useState('');
  const [paciente, setPaciente] = useState(null);
  const [buscaFeita, setBuscaFeita] = useState(false);

  const handleBuscar = (e) => {
    e.preventDefault();
    // Simula a busca dos dados do paciente
    const dadosPaciente = {
      nomeCompleto: 'João Silva',
      cpf: '123.456.789-10',
      rg: 'MG-12.345.678',
      dataNascimento: '01/01/1980',
      certidaoNascimento: '123456789',
      estadoCivil: 'Solteiro',
      endereco: {
        numero: '123',
        logradouro: 'Rua das Flores',
        complemento: 'Apto 101',
        cidade: 'Belo Horizonte',
        uf: 'MG',
        cep: '30123-456',
      },
      telefone: '(31) 98765-4321',
      email: 'joao.silva@example.com',
      numeroCns: '123456789123456',
      dataCadastro: '01/01/2022',
    };
    setPaciente(dadosPaciente);
    setBuscaFeita(true);
  };

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <Header />
        <Section>
          <h2>Iniciar Atendimento</h2>
          {buscaFeita && paciente ? (
            <PatientDetails>
              <DetailRow>
                <label>Nome Completo:</label>
                <span>{paciente.nomeCompleto}</span>
              </DetailRow>
              <DetailRow>
                <label>CPF:</label>
                <span>{paciente.cpf}</span>
              </DetailRow>
              <DetailRow>
                <label>RG:</label>
                <span>{paciente.rg}</span>
              </DetailRow>
              <DetailRow>
                <label>Data de Nascimento:</label>
                <span>{paciente.dataNascimento}</span>
              </DetailRow>
              <DetailRow>
                <label>Certidão de Nascimento:</label>
                <span>{paciente.certidaoNascimento}</span>
              </DetailRow>
              <DetailRow>
                <label>Estado Civil:</label>
                <span>{paciente.estadoCivil}</span>
              </DetailRow>
              <DetailRow>
                <label>Endereço:</label>
                <span>
                  {`${paciente.endereco.logradouro}, ${paciente.endereco.numero}, ${paciente.endereco.complemento}, ${paciente.endereco.cidade} - ${paciente.endereco.uf}, CEP: ${paciente.endereco.cep}`}
                </span>
              </DetailRow>
              <DetailRow>
                <label>Telefone:</label>
                <span>{paciente.telefone}</span>
              </DetailRow>
              <DetailRow>
                <label>Email:</label>
                <span>{paciente.email}</span>
              </DetailRow>
              <DetailRow>
                <label>Número CNS:</label>
                <span>{paciente.numeroCns}</span>
              </DetailRow>
              <DetailRow>
                <label>Data de Cadastro:</label>
                <span>{paciente.dataCadastro}</span>
              </DetailRow>
              <ActionButton className="br-button primary">Gerar Senha para Triagem</ActionButton>
            </PatientDetails>
          ) : (
            <Form onSubmit={handleBuscar}>
              <InputWrapper>
                <label htmlFor="nomeCompleto">Nome Completo</label>
                <Input
                  id="nomeCompleto"
                  type="text"
                  placeholder="Digite o nome completo"
                  value={nomeCompleto}
                  onChange={(e) => setNomeCompleto(e.target.value)}
                />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="cpf">CPF</label>
                <Input
                  id="cpf"
                  type="text"
                  placeholder="Digite o CPF"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="cns">CNS</label>
                <Input
                  id="cns"
                  type="text"
                  placeholder="Digite o CNS"
                  value={cns}
                  onChange={(e) => setCns(e.target.value)}
                />
              </InputWrapper>
              <Button type="submit" className="br-button primary">Buscar</Button>
            </Form>
          )}
        </Section>
      </MainContent>
    </Container>
  );
};

export default IniciarAtendimento;
