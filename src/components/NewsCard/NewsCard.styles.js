import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  padding: 1rem;
  margin: 1rem;
  max-width: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; /* Garantir que todos os cards tenham a mesma altura */
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 0.25rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin: 0.5rem 0;
`;

export const CardText = styled.p`
  font-size: 1rem;
  color: #4a5568;
`;

export const CardButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: auto;
`;

export const CardButton = styled.button`
  background-color: #0A3D62; /* Azul marinho da sidebar */
  color: white;
  border: none;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem; /* Tamanho de fonte menor para um visual mais delicado */

  &:hover {
    background-color: #083358; /* Azul mais escuro para hover */
  }

  svg {
    margin-left: 0.5rem;
  }
`;
