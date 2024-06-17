import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import ClassificationSelect from './ClassificationSelect';
import {
  Container,
  MainContent,
  Section,
  Form,
  InputWrapper,
  Input,
  Label,
  GenderWrapper,
  GenderOptions,
  AddressWrapper,
  ActionButtonGroup,
  ActionButton,
  ButtonCancel,
  TextArea,
  Divider,
  DividerText
} from './Triagem.styles';

const Triagem = () => {
  const [dadosPaciente, setDadosPaciente] = useState({
    nomeCompleto: 'João Silva',
    cpf: '123.456.789-10',
    rg: 'MG-12.345.678',
    dataNascimento: '01/01/1980',
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
    sexo: 'Masculino',
    classificacao: '',
    sintomas: '',
    alergias: '',
    temAlergias: false,
    peso: '',
    altura: '',
    pressaoArterial: '',
    temperatura: '',
    saturacaoOxigenio: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDadosPaciente({
      ...dadosPaciente,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleClassificationChange = (selectedOption) => {
    setDadosPaciente({
      ...dadosPaciente,
      classificacao: selectedOption.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para salvar os dados do paciente
    console.log(dadosPaciente);
  };

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <Header />
        <Section>
          <h2>Triagem</h2>
          <Form onSubmit={handleSubmit}>
            <InputWrapper>
              <Label htmlFor="nomeCompleto">Nome Completo</Label>
              <Input
                id="nomeCompleto"
                name="nomeCompleto"
                type="text"
                value={dadosPaciente.nomeCompleto}
                disabled
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="cpf">CPF</Label>
              <Input
                id="cpf"
                name="cpf"
                type="text"
                value={dadosPaciente.cpf}
                disabled
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="rg">RG</Label>
              <Input
                id="rg"
                name="rg"
                type="text"
                value={dadosPaciente.rg}
                disabled
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="dataNascimento">Data de Nascimento</Label>
              <Input
                id="dataNascimento"
                name="dataNascimento"
                type="text"
                value={dadosPaciente.dataNascimento}
                disabled
              />
            </InputWrapper>
            <AddressWrapper>
              <InputWrapper>
                <Label htmlFor="logradouro">Logradouro</Label>
                <Input
                  id="logradouro"
                  name="logradouro"
                  type="text"
                  value={dadosPaciente.endereco.logradouro}
                  disabled
                />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="numero">Número</Label>
                <Input
                  id="numero"
                  name="numero"
                  type="text"
                  value={dadosPaciente.endereco.numero}
                  disabled
                />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="complemento">Complemento</Label>
                <Input
                  id="complemento"
                  name="complemento"
                  type="text"
                  value={dadosPaciente.endereco.complemento}
                  disabled
                />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="cidade">Cidade</Label>
                <Input
                  id="cidade"
                  name="cidade"
                  type="text"
                  value={dadosPaciente.endereco.cidade}
                  disabled
                />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="uf">UF</Label>
                <Input
                  id="uf"
                  name="uf"
                  type="text"
                  value={dadosPaciente.endereco.uf}
                  disabled
                />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="cep">CEP</Label>
                <Input
                  id="cep"
                  name="cep"
                  type="text"
                  value={dadosPaciente.endereco.cep}
                  disabled
                />
              </InputWrapper>
            </AddressWrapper>
            <GenderWrapper>
              <Label>Sexo</Label>
              <GenderOptions>
                <label>
                  <input
                    type="radio"
                    name="sexo"
                    value="Masculino"
                    checked={dadosPaciente.sexo === 'Masculino'}
                    disabled
                  />
                  Masculino
                </label>
                <label>
                  <input
                    type="radio"
                    name="sexo"
                    value="Feminino"
                    checked={dadosPaciente.sexo === 'Feminino'}
                    disabled
                  />
                  Feminino
                </label>
              </GenderOptions>
            </GenderWrapper>
            <Divider>
              <DividerText>Dados Triagem</DividerText>
            </Divider>
            <InputWrapper>
              <Label htmlFor="sintomas">Sintomas</Label>
              <TextArea
                id="sintomas"
                name="sintomas"
                value={dadosPaciente.sintomas}
                onChange={handleChange}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>Alergias</Label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="temAlergias"
                    value="true"
                    checked={dadosPaciente.temAlergias === true}
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="temAlergias"
                    value="false"
                    checked={dadosPaciente.temAlergias === false}
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>
              {dadosPaciente.temAlergias && (
                <TextArea
                  name="alergias"
                  value={dadosPaciente.alergias}
                  onChange={handleChange}
                  placeholder="Descreva as alergias"
                />
              )}
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="peso">Peso (kg)</Label>
              <Input
                id="peso"
                name="peso"
                type="text"
                value={dadosPaciente.peso}
                onChange={handleChange}
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="altura">Altura (cm)</Label>
              <Input
                id="altura"
                name="altura"
                type="text"
                value={dadosPaciente.altura}
                onChange={handleChange}
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="pressaoArterial">Pressão Arterial (../..) mmHg</Label>
              <Input
                id="pressaoArterial"
                name="pressaoArterial"
                type="text"
                value={dadosPaciente.pressaoArterial}
                onChange={handleChange}
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="temperatura">Temperatura (°C)</Label>
              <Input
                id="temperatura"
                name="temperatura"
                type="text"
                value={dadosPaciente.temperatura}
                onChange={handleChange}
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="saturacaoOxigenio">Saturação de Oxigênio (%)</Label>
              <Input
                id="saturacaoOxigenio"
                name="saturacaoOxigenio"
                type="text"
                value={dadosPaciente.saturacaoOxigenio}
                onChange={handleChange}
              />
            </InputWrapper>
            <InputWrapper>
              <ClassificationSelect onChange={handleClassificationChange} />
            </InputWrapper>
            <ActionButtonGroup>
              <ActionButton type="submit">Salvar</ActionButton>
              <ButtonCancel type="button">Cancelar</ButtonCancel>
            </ActionButtonGroup>
          </Form>
        </Section>
      </MainContent>
    </Container>
  );
};

export default Triagem;
