import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const options = [
  { value: 'Emergência', label: 'Vermelho (Emergência - Atendimento Imediato)', color: '#FF0000' },
  { value: 'Muito Urgente', label: 'Laranja (Muito Urgente - Até 10 Minutos)', color: '#FFA500' },
  { value: 'Urgente', label: 'Amarelo (Urgente - Até 60 Minutos)', color: '#FFFF00' },
  { value: 'Pouco Urgente', label: 'Verde (Pouco Urgente - Até 120 Minutos)', color: '#00FF00' },
  { value: 'Não Urgente', label: 'Azul (Não Urgente - Até 240 Minutos)', color: '#0000FF' },
];

const customStyles = {
  control: (styles) => ({ ...styles, borderColor: '#FFD700', boxShadow: 'none' }),
  option: (styles, { data, isFocused, isSelected }) => {
    const color = data.color;
    return {
      ...styles,
      backgroundColor: isFocused ? color : null,
      color: '#000',
      cursor: isDisabled ? 'not-allowed' : 'default',
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif', // Manter a fonte anterior
      fontSize: '14px', // Manter o tamanho da fonte anterior
    };
  },
  singleValue: (styles, { data }) => ({
    ...styles,
    color: data.color,
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif', // Manter a fonte anterior
    fontSize: '14px', // Manter o tamanho da fonte anterior
  }),
};

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Dot = styled.span`
  height: 10px;
  width: 10px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
`;

const CustomOption = (props) => {
  const { innerRef, innerProps, data } = props;
  return (
    <div ref={innerRef} {...innerProps} style={{ display: 'flex', alignItems: 'center' }}>
      <Dot color={data.color} />
      {data.label}
    </div>
  );
};

const CustomSingleValue = (props) => {
  const { data } = props;
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Dot color={data.color} />
      {data.label}
    </div>
  );
};

const ClassificationSelect = ({ onChange }) => (
  <div>
    <Label>Classificação</Label>
    <Select
      options={options}
      styles={customStyles}
      placeholder="Insira o nível de urgência do atendimento"
      onChange={onChange}
      components={{ Option: CustomOption, SingleValue: CustomSingleValue }}
    />
  </div>
);

export default ClassificationSelect;
