import { SidebarContainer, UserProfile, Nav, NavItem } from './Sidebar.styles';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <UserProfile>
        <img src="https://via.placeholder.com/50" alt="User" />
        <div>
          <p>Francisca Cavalcante</p>
          <span>Recepção</span>
          <a href="#">Sair</a>
        </div>
      </UserProfile>
      <Nav>
        <NavItem className="br-item">Página Inicial</NavItem>
        <NavItem className="br-item">Meus Atendimentos</NavItem>
        <NavItem className="br-item">Usuários</NavItem>
        <NavItem className="br-item">Relatórios</NavItem>
      </Nav>
    </SidebarContainer>
  );
};

export default Sidebar;
