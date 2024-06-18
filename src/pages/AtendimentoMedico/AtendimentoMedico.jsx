import React, { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  Label,
  GenderWrapper,
  GenderOptions,
  AddressWrapper,
  ActionButtonGroup,
  ActionButton,
  ButtonCancel,
  TextArea,
  TextAreaSintomas,
  Divider,
  DividerText,
  AlergiasWrapper
} from '../Triagem/Triagem.styles';

const AtendimentoMedico = () => {
  const location = useLocation();
  const { paciente } = location.state;
  const { atualizarStatusPaciente } = useContext(FilaContext);

  const [dadosPaciente, setDadosPaciente] = useState({
    ...paciente,
    classificacao: paciente.classificacao || '',
    sintomas: paciente.sintomas || '',
    alergias: paciente.alergias || '',
    temAlergias: paciente.temAlergias || false,
    peso: paciente.peso || '',
    altura: paciente.altura || '',
    pressaoArterial: paciente.pressaoArterial || '',
    temperatura: paciente.temperatura || '',
    saturacaoOxigenio: paciente.saturacaoOxigenio || '',
    prontuario: paciente.prontuario || ''
  });

  useEffect(() => {
    // Atualiza o estado inicial dos dados do paciente
    setDadosPaciente(prevState => ({
      ...prevState,
      ...paciente,
      classificacao: paciente.classificacao || '',
      sintomas: paciente.sintomas || '',
      alergias: paciente.alergias || '',
      temAlergias: paciente.temAlergias || false,
      peso: paciente.peso || '',
      altura: paciente.altura || '',
      pressaoArterial: paciente.pressaoArterial || '',
      temperatura: paciente.temperatura || '',
      saturacaoOxigenio: paciente.saturacaoOxigenio || '',
      prontuario: paciente.prontuario || ''
    }));
  }, [paciente]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDadosPaciente({
      ...dadosPaciente,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Final dadosPaciente state on submit:', dadosPaciente);
    atualizarStatusPaciente(dadosPaciente.senha, 'Atendimento Médico Concluído', dadosPaciente);
    alert('Atendimento salvo com sucesso!');
  };

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <Header />
        <Section>
          <h2>Atendimento Médico</h2>
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
            <InputWrapper style={{ gridColumn: 'span 2' }}>
              <Label htmlFor="sintomas">Sintomas</Label>
              <TextAreaSintomas
                id="sintomas"
                name="sintomas"
                value={dadosPaciente.sintomas}
                onChange={handleChange}
                placeholder="Descreva os sintomas"
                disabled
              />
            </InputWrapper>
            <AlergiasWrapper>
              <Label>Alergias</Label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="temAlergias"
                    value="true"
                    checked={dadosPaciente.temAlergias === true}
                    onChange={handleChange}
                    disabled
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
                    disabled
                  />
                  Não
                </label>
              </div>
              {dadosPaciente.temAlergias && (
                <InputWrapper style={{ width: '100%' }}>
                  <TextArea
                    name="alergias"
                    value={dadosPaciente.alergias}
                    onChange={handleChange}
                    placeholder="Descreva as alergias"
                    disabled
                  />
                </InputWrapper>
              )}
            </AlergiasWrapper>
            <InputWrapper>
              <Label htmlFor="peso">Peso (kg)</Label>
              <Input
                id="peso"
                name="peso"
                type="text"
                value={dadosPaciente.peso}
                onChange={handleChange}
                placeholder="Digite o peso"
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
                placeholder="Digite a altura"
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
                placeholder="Digite a pressão arterial"
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
                placeholder="Digite a temperatura"
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
                placeholder="Digite a saturação de oxigênio"
              />
            </InputWrapper>
            <InputWrapper style={{ gridColumn: 'span 2' }}>
              <Label htmlFor="prontuario">Prontuário</Label>
              <TextAreaSintomas
                id="prontuario"
                name="prontuario"
                value={dadosPaciente.prontuario}
                onChange={handleChange}
                placeholder="Descreva o prontuário"
              />
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

export default AtendimentoMedico;
