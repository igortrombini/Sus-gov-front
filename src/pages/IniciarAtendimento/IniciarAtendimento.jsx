import React, { useState, useContext } from 'react';
import { FaSearch, FaUser, FaCalendar, FaIdCard, FaEnvelope, FaPhone, FaHome, FaPrint } from 'react-icons/fa';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { FilaContext } from '../../context/FilaContext';
import {
  Container,
  MainContent,
  Section,
  Form,
  InputWrapper,
  Input,
  Button,
  Icon,
  GenderWrapper,
  GenderOptions,
  Label,
  SearchWrapper,
  AddressWrapper,
  ActionButtonGroup,
  ActionButton
} from './IniciarAtendimento.styles';

const IniciarAtendimento = () => {
  const { adicionarPaciente, gerarProximaSenha } = useContext(FilaContext);
  const [dadosPaciente, setDadosPaciente] = useState({
    nomeCompleto: '',
    cpf: '',
    rg: '',
    dataNascimento: '',
    certidaoNascimento: '',
    estadoCivil: '',
    endereco: {
      logradouro: '',
      numero: '',
      complemento: '',
      cidade: '',
      uf: '',
      cep: ''
    },
    telefone: '',
    email: '',
    numeroCns: '',
    dataCadastro: '',
    sexo: ''
  });
  const [isBuscaFeita, setIsBuscaFeita] = useState(false);
  const [senhaGerada, setSenhaGerada] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDadosPaciente((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setDadosPaciente((prevState) => ({
      ...prevState,
      endereco: {
        ...prevState.endereco,
        [name]: value,
      },
    }));
  };

  const handleBuscar = (e) => {
    e.preventDefault();
    const paciente = {
      nomeCompleto: 'João Silva',
      cpf: '123.456.789-10',
      rg: 'MG-12.345.678',
      dataNascimento: '01/01/1980',
      certidaoNascimento: '123456789',
      estadoCivil: 'Solteiro',
      endereco: {
        logradouro: 'Rua das Flores',
        numero: '123',
        complemento: 'Apto 101',
        cidade: 'Belo Horizonte',
        uf: 'MG',
        cep: '30123-456'
      },
      telefone: '(31) 98765-4321',
      email: 'joao.silva@example.com',
      numeroCns: '123456789123456',
      dataCadastro: '01/01/2022',
      sexo: 'Masculino'
    };

    setDadosPaciente(paciente);
    setIsBuscaFeita(true);
  };

  const handleGerarSenha = () => {
    const novaSenha = gerarProximaSenha();
    adicionarPaciente({ ...dadosPaciente, senha: novaSenha, horaEntrada: new Date() });
    setSenhaGerada(novaSenha);
    alert(`Senha Gerada: ${novaSenha}`);
  };

  const handleImprimirSenha = () => {
    if (senhaGerada) {
      // Lógica para imprimir a senha
      alert(`Imprimindo Senha: ${senhaGerada}`);
    } else {
      alert('Primeiro gere uma senha');
    }
  };

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <Header />
        <Section>
          <h2>Iniciar Atendimento</h2>
          <Form onSubmit={handleBuscar}>
            <SearchWrapper>
              <Label htmlFor="busca">Nome</Label>
              <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <Input
                  id="busca"
                  type="text"
                  placeholder="Digite o nome, telefone, CPF ou data de nascimento"
                  required
                  style={{ flex: 1 }}
                />
                <Button type="submit">
                  <FaSearch />
                </Button>
              </div>
            </SearchWrapper>
          </Form>
          <h3 className="section-title">Informações Básicas</h3>
          <Form>
            <InputWrapper>
              <Label htmlFor="nomeCompleto">Nome</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="nomeCompleto"
                  name="nomeCompleto"
                  type="text"
                  value={dadosPaciente.nomeCompleto}
                  onChange={handleInputChange}
                  placeholder="Insira seu nome completo"
                  disabled={!isBuscaFeita}
                />
                <Icon><FaUser /></Icon>
              </div>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="cpf">CPF</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="cpf"
                  name="cpf"
                  type="text"
                  value={dadosPaciente.cpf}
                  onChange={handleInputChange}
                  placeholder="000.000.000-00"
                  disabled={!isBuscaFeita}
                />
                <Icon><FaIdCard /></Icon>
              </div>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="rg">RG</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="rg"
                  name="rg"
                  type="text"
                  value={dadosPaciente.rg}
                  onChange={handleInputChange}
                  placeholder="Digite o RG"
                  disabled={!isBuscaFeita}
                />
                <Icon><FaIdCard /></Icon>
              </div>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="dataNascimento">Data de Nascimento</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="dataNascimento"
                  name="dataNascimento"
                  type="text"
                  value={dadosPaciente.dataNascimento}
                  onChange={handleInputChange}
                  placeholder="Digite a data de nascimento"
                  disabled={!isBuscaFeita}
                />
                <Icon><FaCalendar /></Icon>
              </div>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="certidaoNascimento">Certidão de Nascimento</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="certidaoNascimento"
                  name="certidaoNascimento"
                  type="text"
                  value={dadosPaciente.certidaoNascimento}
                  onChange={handleInputChange}
                  placeholder="Digite a certidão de nascimento"
                  disabled={!isBuscaFeita}
                />
                <Icon><FaIdCard /></Icon>
              </div>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="estadoCivil">Estado Civil</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="estadoCivil"
                  name="estadoCivil"
                  type="text"
                  value={dadosPaciente.estadoCivil}
                  onChange={handleInputChange}
                  placeholder="Digite o estado civil"
                  disabled={!isBuscaFeita}
                />
                <Icon><FaUser /></Icon>
              </div>
            </InputWrapper>
            <GenderWrapper>
              <Label>Sexo (Opcional)</Label>
              <GenderOptions>
                <label>
                  <input
                    type="radio"
                    name="sexo"
                    value="Masculino"
                    checked={dadosPaciente.sexo === 'Masculino'}
                    onChange={handleInputChange}
                    disabled={!isBuscaFeita}
                  />
                  Masculino
                </label>
                <label>
                  <input
                    type="radio"
                    name="sexo"
                    value="Feminino"
                    checked={dadosPaciente.sexo === 'Feminino'}
                    onChange={handleInputChange}
                    disabled={!isBuscaFeita}
                  />
                  Feminino
                </label>
              </GenderOptions>
            </GenderWrapper>
          </Form>
          <h3 className="section-title">Endereço</h3>
          <AddressWrapper>
            <InputWrapper>
              <Label htmlFor="logradouro">Logradouro</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="logradouro"
                  name="logradouro"
                  type="text"
                  value={dadosPaciente.endereco.logradouro}
                  onChange={handleAddressChange}
                  placeholder="Digite o logradouro"
                  disabled={!isBuscaFeita}
                />
                <Icon><FaHome /></Icon>
              </div>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="numero">Número</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="numero"
                  name="numero"
                  type="text"
                  value={dadosPaciente.endereco.numero}
                  onChange={handleAddressChange}
                  placeholder="Digite o número"
                  disabled={!isBuscaFeita}
                />
                <Icon><FaHome /></Icon>
              </div>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="complemento">Complemento</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="complemento"
                  name="complemento"
                  type="text"
                  value={dadosPaciente.endereco.complemento}
                  onChange={handleAddressChange}
                  placeholder="Digite o complemento"
                  disabled={!isBuscaFeita}
                />
                <Icon><FaHome /></Icon>
              </div>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="cidade">Cidade</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="cidade"
                  name="cidade"
                  type="text"
                  value={dadosPaciente.endereco.cidade}
                  onChange={handleAddressChange}
                  placeholder="Digite a cidade"
                  disabled={!isBuscaFeita}
                />
                <Icon><FaHome /></Icon>
              </div>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="uf">UF</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="uf"
                  name="uf"
                  type="text"
                  value={dadosPaciente.endereco.uf}
                  onChange={handleAddressChange}
                  placeholder="Digite a UF"
                  disabled={!isBuscaFeita}
                />
                <Icon><FaHome /></Icon>
              </div>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="cep">CEP</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="cep"
                  name="cep"
                  type="text"
                  value={dadosPaciente.endereco.cep}
                  onChange={handleAddressChange}
                  placeholder="Digite o CEP"
                  disabled={!isBuscaFeita}
                />
                <Icon><FaHome /></Icon>
              </div>
            </InputWrapper>
          </AddressWrapper>
          <h3 className="section-title">Dados para Contato</h3>
          <Form>
            <InputWrapper>
              <Label htmlFor="email">Email</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="email"
                  name="email"
                  type="text"
                  value={dadosPaciente.email}
                  onChange={handleInputChange}
                  placeholder="Insira seu email"
                  disabled={!isBuscaFeita}
                />
                <Icon><FaEnvelope /></Icon>
              </div>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="telefone">Telefone</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="telefone"
                  name="telefone"
                  type="text"
                  value={dadosPaciente.telefone}
                  onChange={handleInputChange}
                  placeholder="(DDD) 00000.0000"
                  disabled={!isBuscaFeita}
                />
                <Icon><FaPhone /></Icon>
              </div>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="numeroCns">Número CNS</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="numeroCns"
                  name="numeroCns"
                  type="text"
                  value={dadosPaciente.numeroCns}
                  onChange={handleInputChange}
                  placeholder="Digite o número CNS"
                  disabled={!isBuscaFeita}
                />
                <Icon><FaIdCard /></Icon>
              </div>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="dataCadastro">Data de Cadastro</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="dataCadastro"
                  name="dataCadastro"
                  type="text"
                  value={dadosPaciente.dataCadastro}
                  onChange={handleInputChange}
                  placeholder="Digite a data de cadastro"
                  disabled={!isBuscaFeita}
                />
                <Icon><FaCalendar /></Icon>
              </div>
            </InputWrapper>
          </Form>
          <ActionButtonGroup>
            <ActionButton onClick={handleGerarSenha}>
              <FaUser style={{ marginRight: '0.5rem' }} /> Gerar Senha
            </ActionButton>
            <ActionButton onClick={handleImprimirSenha}>
              <FaPrint style={{ marginRight: '0.5rem' }} /> Imprimir Senha
            </ActionButton>
          </ActionButtonGroup>
        </Section>
      </MainContent>
    </Container>
  );
};

export default IniciarAtendimento;
