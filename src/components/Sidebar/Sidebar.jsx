import React, { useState } from 'react';
import { SidebarContainer, UserProfile, Nav, NavItem, Logo, Footer } from './Sidebar.styles';
import govLogo from '../../assets/gov_logo.png'; 
import profileImg from '../../assets/profile_img.jpg'; 

const Sidebar = ({ setCurrentSection }) => {
  const [activeSection, setActiveSection] = useState('novidades');

  const handleNavClick = (section) => {
    setActiveSection(section);
    setCurrentSection(section);
  };

  return (
    <SidebarContainer>
      <Logo>
        <img src={govLogo} alt="Logo" />
      </Logo>
      <Nav>
        <NavItem onClick={() => handleNavClick('novidades')} active={activeSection === 'novidades'}>
          <span className="nav-text">Página Inicial</span>
          <i className={activeSection === 'novidades' ? "fas fa-play nav-icon" : "fas fa-chevron-right nav-icon"}></i>
        </NavItem>
        <NavItem onClick={() => handleNavClick('iniciar-atendimento')} active={activeSection === 'iniciar-atendimento'}>
          <span className="nav-text">Iniciar Atendimento</span>
          <i className={activeSection === 'iniciar-atendimento' ? "fas fa-play nav-icon" : "fas fa-chevron-right nav-icon"}></i>
        </NavItem>
        <NavItem onClick={() => handleNavClick('usuarios')} active={activeSection === 'usuarios'}>
          <span className="nav-text">Usuários</span>
          <i className={activeSection === 'usuarios' ? "fas fa-play nav-icon" : "fas fa-chevron-right nav-icon"}></i>
        </NavItem>
        <NavItem onClick={() => handleNavClick('reservas')} active={activeSection === 'reservas'}>
          <span className="nav-text">Reservas</span>
          <i className={activeSection === 'reservas' ? "fas fa-play nav-icon" : "fas fa-chevron-right nav-icon"}></i>
        </NavItem>
      </Nav>
      <UserProfile>
        <img src={profileImg} alt="User" />
        <div>
          <p>Franciele Cavalcante</p>
          <span>Recepção</span>
          <a href="#">
            <i className="fas fa-sign-out-alt"></i> Sair
          </a>
        </div>
      </UserProfile>
      <Footer>
        Todo o conteúdo deste site está publicado sob a licença Creative Commons Atribuição-SemDerivações 3.0
      </Footer>
    </SidebarContainer>
  );
};

export default Sidebar;
