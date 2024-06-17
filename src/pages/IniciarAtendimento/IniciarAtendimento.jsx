import React, { useState, useContext } from 'react';
import { FaSearch, FaUser, FaCalendar, FaIdCard, FaEnvelope, FaPhone, FaHome, FaPrint } from 'react-icons/fa';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { FilaContext } from '../../context/FilaContext'; // Certifique-se de que está usando o FilaContext corretamente
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
  const { adicionarPaciente, gerarProximaSenha } = useContext(FilaContext); // Certifique-se de que está usando o FilaContext corretamente
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
                  type="text"
                  value={dadosPaciente.nomeCompleto}
                  placeholder="Insira seu nome completo"
                  disabled={!isBuscaFeita}
                  onChange={(e) => setDadosPaciente({ ...dadosPaciente, nomeCompleto: e.target.value })}
                />
                <Icon><FaUser /></Icon>
              </div>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="cpf">CPF</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="cpf"
                  type="text"
                  value={dadosPaciente.cpf}
                  placeholder="000.000.000-00"
                  disabled={!isBuscaFeita}
                  onChange={(e) => setDadosPaciente({ ...dadosPaciente, cpf: e.target.value })}
                />
                <Icon><FaIdCard /></Icon>
              </div>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="rg">RG</Label> {/* Corrigido */}
              <div style={{ position: 'relative' }}>
                <Input
                  id="rg"
                  type="text"
                  value={dadosPaciente.rg}
                  placeholder="Digite o RG"
                  disabled={!isBuscaFeita}
                  onChange={(e) => setDadosPaciente({ ...dadosPaciente, rg: e.target.value })}
                />
                <Icon><FaIdCard /></Icon>
              </div>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="dataNascimento">Data de Nascimento</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="dataNascimento"
                  type="text"
                  value={dadosPaciente.dataNascimento}
                  placeholder="Digite a data de nascimento"
                  disabled={!isBuscaFeita}
                  onChange={(e) => setDadosPaciente({ ...dadosPaciente, dataNascimento: e.target.value })}
                />
                <Icon><FaCalendar /></Icon>
              </div>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="certidaoNascimento">Certidão de Nascimento</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="certidaoNascimento"
                  type="text"
                  value={dadosPaciente.certidaoNascimento}
                  placeholder="Digite a certidão de nascimento"
                  disabled={!isBuscaFeita}
                  onChange={(e) => setDadosPaciente({ ...dadosPaciente, certidaoNascimento: e.target.value })}
                />
                <Icon><FaIdCard /></Icon>
              </div>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="estadoCivil">Estado Civil</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="estadoCivil"
                  type="text"
                  value={dadosPaciente.estadoCivil}
                  placeholder="Digite o estado civil"
                  disabled={!isBuscaFeita}
                  onChange={(e) => setDadosPaciente({ ...dadosPaciente, estadoCivil: e.target.value })}
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
                    disabled={!isBuscaFeita}
                    onChange={() => setDadosPaciente({ ...dadosPaciente, sexo: 'Masculino' })}
                  />
                  Masculino
                </label>
                <label>
                  <input
                    type="radio"
                    name="sexo"
                    value="Feminino"
                    checked={dadosPaciente.sexo === 'Feminino'}
                    disabled={!isBuscaFeita}
                    onChange={() => setDadosPaciente({ ...dadosPaciente, sexo: 'Feminino' })}
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
                  type="text"
                  value={dadosPaciente.endereco.logradouro}
                  placeholder="Digite o logradouro"
                  disabled={!isBuscaFeita}
                  onChange={(e) => setDadosPaciente({
                    ...dadosPaciente,
                    endereco: { ...dadosPaciente.endereco, logradouro: e.target.value }
                  })}
                />
                <Icon><FaHome /></Icon>
              </div>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="numero">Número</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="numero"
                  type="text"
                  value={dadosPaciente.endereco.numero}
                  placeholder="Digite o número"
                  disabled={!isBuscaFeita}
                  onChange={(e) => setDadosPaciente({
                    ...dadosPaciente,
                    endereco: { ...dadosPaciente.endereco, numero: e.target.value }
                  })}
                />
                <Icon><FaHome /></Icon>
              </div>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="complemento">Complemento</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="complemento"
                  type="text"
                  value={dadosPaciente.endereco.complemento}
                  placeholder="Digite o complemento"
                  disabled={!isBuscaFeita}
                  onChange={(e) => setDadosPaciente({
                    ...dadosPaciente,
                    endereco: { ...dadosPaciente.endereco, complemento: e.target.value }
                  })}
                />
                <Icon><FaHome /></Icon>
              </div>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="cidade">Cidade</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="cidade"
                  type="text"
                  value={dadosPaciente.endereco.cidade}
                  placeholder="Digite a cidade"
                  disabled={!isBuscaFeita}
                  onChange={(e) => setDadosPaciente({
                    ...dadosPaciente,
                    endereco: { ...dadosPaciente.endereco, cidade: e.target.value }
                  })}
                />
                <Icon><FaHome /></Icon>
              </div>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="uf">UF</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="uf"
                  type="text"
                  value={dadosPaciente.endereco.uf}
                  placeholder="Digite a UF"
                  disabled={!isBuscaFeita}
                  onChange={(e) => setDadosPaciente({
                    ...dadosPaciente,
                    endereco: { ...dadosPaciente.endereco, uf: e.target.value }
                  })}
                />
                <Icon><FaHome /></Icon>
              </div>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="cep">CEP</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="cep"
                  type="text"
                  value={dadosPaciente.endereco.cep}
                  placeholder="Digite o CEP"
                  disabled={!isBuscaFeita}
                  onChange={(e) => setDadosPaciente({
                    ...dadosPaciente,
                    endereco: { ...dadosPaciente.endereco, cep: e.target.value }
                  })}
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
                  type="text"
                  value={dadosPaciente.email}
                  placeholder="Insira seu email"
                  disabled={!isBuscaFeita}
                  onChange={(e) => setDadosPaciente({ ...dadosPaciente, email: e.target.value })}
                />
                <Icon><FaEnvelope /></Icon>
              </div>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="telefone">Telefone</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="telefone"
                  type="text"
                  value={dadosPaciente.telefone}
                  placeholder="(DDD) 00000.0000"
                  disabled={!isBuscaFeita}
                  onChange={(e) => setDadosPaciente({ ...dadosPaciente, telefone: e.target.value })}
                />
                <Icon><FaPhone /></Icon>
              </div>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="numeroCns">Número CNS</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="numeroCns"
                  type="text"
                  value={dadosPaciente.numeroCns}
                  placeholder="Digite o número CNS"
                  disabled={!isBuscaFeita}
                  onChange={(e) => setDadosPaciente({ ...dadosPaciente, numeroCns: e.target.value })}
                />
                <Icon><FaIdCard /></Icon>
              </div>
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="dataCadastro">Data de Cadastro</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="dataCadastro"
                  type="text"
                  value={dadosPaciente.dataCadastro}
                  placeholder="Digite a data de cadastro"
                  disabled={!isBuscaFeita}
                  onChange={(e) => setDadosPaciente({ ...dadosPaciente, dataCadastro: e.target.value })}
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
