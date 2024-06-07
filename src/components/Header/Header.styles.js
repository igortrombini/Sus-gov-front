import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  input {
    padding: 0.5rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.25rem 0 0 0.25rem;
    &:focus {
      outline: none;
    }
  }
  button {
    padding: 0.5rem;
    border: 1px solid #e2e8f0;
    border-radius: 0 0.25rem 0.25rem 0;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
`;

export const UserIcon = styled.div`
  font-size: 2rem;
  color: #007bff;
`;
