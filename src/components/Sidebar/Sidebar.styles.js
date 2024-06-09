import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 360px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Rawline', sans-serif; /* Fonte do Design System */
`;

export const UserProfile = styled.div`
  width: 100%;
  background-color: #eef2f6; /* Ajuste da cor de fundo */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  margin-bottom: 2rem;
  margin-top: auto; /* Mantém o UserProfile na parte inferior */
  img {
    border-radius: 50%;
    margin-bottom: 1rem;
    width: 60px;
    height: 60px;
  }
  p {
    font-weight: bold;
    margin: 0;
    color: #0A3D62; /* Cor azul marinho para o texto */
    font-size: 1rem;
  }
  span {
    display: block;
    color: #28a745; /* Cor do texto secundário */
    font-size: 0.875rem;
  }
  a {
    color: #007bff; /* Cor do link */
    text-decoration: none;
    font-size: 0.875rem;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
  }
  i {
    margin-right: 0.25rem; /* Espaço entre o ícone e o texto */
  }
`;

export const Nav = styled.nav`
  width: 100%;
  padding: 0 1rem;
  margin-top: 2rem; /* Adiciona um espaçamento entre o logo e os itens de navegação */
`;

export const NavItem = styled.div`
  padding: 1rem;
  width: 100%;
  color: ${({ active }) => (active ? '#ffffff' : '#000000')}; /* Cor do texto padrão preta e branca quando ativo */
  background-color: ${({ active }) => (active ? '#0A3D62' : 'transparent')}; /* Cor de fundo azul marinho quando ativo */
  font-size: 1rem;
  font-family: 'Rawline', sans-serif; /* Fonte do Design System */
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e9ecef; /* Linha inferior */
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #0A3D62; /* Cor de fundo ao passar o mouse */
    color: #ffffff; /* Cor do texto ao passar o mouse */
    cursor: pointer;
  }

  .nav-text {
    flex-grow: 1;
  }

  .nav-icon {
    margin-left: auto; /* Move o ícone para o final do container */
    font-size: 0.9rem; /* Tamanho menor para os ícones */
    color: ${({ active }) => (active ? '#ffffff' : '#495057')}; /* Cor dos ícones */
  }
`;

export const Logo = styled.div`
  margin-bottom: 2rem;
  padding: 0 1rem;
  img {
    width: 150px;
  }
`;

export const Footer = styled.div`
  width: 100%;
  padding: 1rem;
  text-align: center;
  font-size: 0.75rem;
  color: #000000; /* Ajuste da cor do texto */
  border-top: 1px solid #e9ecef;
  background-color: #ffffff; /* Ajuste da cor de fundo */
`;
