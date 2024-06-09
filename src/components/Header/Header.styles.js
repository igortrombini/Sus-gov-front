import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between; /* Distribui espaço entre a barra de pesquisa e os ícones */
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8f9fa; /* Cor de fundo para a barra de pesquisa */
  border-radius: 8px; /* Arredondar os cantos */
  padding: 0.5rem; /* Espaçamento interno */
  
  input {
    padding: 0.5rem;
    border: none; /* Remove a borda padrão */
    background: transparent; /* Fundo transparente */
    font-size: 1rem;
    font-family: 'Rawline', sans-serif;
    &:focus {
      outline: none;
    }
  }

  button {
    padding: 0.5rem;
    border: none; /* Remove a borda padrão */
    background: transparent; /* Fundo transparente */
    color: #007bff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.div`
  font-size: 1.5rem;
  color: #007bff;
  margin-left: 1rem;
  cursor: pointer;
  &:first-child {
    margin-left: 0;
  }
`;
