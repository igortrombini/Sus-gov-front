import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const options = [
  { value: 'vermelho', label: 'Vermelho (Emergência - Atendimento Imediato)', color: '#FF0000' },
  { value: 'laranja', label: 'Laranja (Muito Urgente - Até 10 Minutos)', color: '#FFA500' },
  { value: 'amarelo', label: 'Amarelo (Urgente - Até 60 Minutos)', color: '#FFFF00' },
  { value: 'verde', label: 'Verde (Pouco Urgente - Até 120 Minutos)', color: '#00FF00' },
  { value: 'azul', label: 'Azul (Não Urgente - Até 240 Minutos)', color: '#0000FF' },
];

const customStyles = {
  control: (styles) => ({ ...styles, borderColor: '#FFD700', boxShadow: 'none' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = data.color;
    return {
      ...styles,
      backgroundColor: isFocused ? color : null,
      color: '#000',
      cursor: isDisabled ? 'not-allowed' : 'default',
    };
  },
  singleValue: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
};

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const ClassificationSelect = ({ onChange }) => (
  <div>
    <Label>Classificação</Label>
    <Select
      options={options}
      styles={customStyles}
      placeholder="Insira o nível de urgência do atendimento"
      onChange={onChange}
    />
  </div>
);

export default ClassificationSelect;
