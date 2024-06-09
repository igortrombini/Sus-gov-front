import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarContainer, UserProfile, Nav, NavItem, Logo, Footer } from './Sidebar.styles';
import govLogo from '../../assets/gov_logo.png'; 
import profileImg from '../../assets/profile_img.jpg'; 

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case '/home':
        setActiveSection('novidades');
        break;
      case '/iniciar-atendimento':
        setActiveSection('iniciar-atendimento');
        break;
      case '/fila-atendimento':
        setActiveSection('fila-atendimento');
        break;
      case '/reservas':
        setActiveSection('reservas');
        break;
      default:
        setActiveSection('');
    }
  }, [location.pathname]);

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <SidebarContainer>
      <Logo>
        <img src={govLogo} alt="Logo" />
      </Logo>
      <Nav>
        <NavItem as={Link} to="/home" onClick={() => handleNavClick('novidades')} active={activeSection === 'novidades'}>
          <span className="nav-text">Página Inicial</span>
          <i className={activeSection === 'novidades' ? "fas fa-play nav-icon" : "fas fa-chevron-right nav-icon"}></i>
        </NavItem>
        <NavItem as={Link} to="/iniciar-atendimento" onClick={() => handleNavClick('iniciar-atendimento')} active={activeSection === 'iniciar-atendimento'}>
          <span className="nav-text">Iniciar Atendimento</span>
          <i className={activeSection === 'iniciar-atendimento' ? "fas fa-play nav-icon" : "fas fa-chevron-right nav-icon"}></i>
        </NavItem>
        <NavItem as={Link} to="/fila-atendimento" onClick={() => handleNavClick('fila-atendimento')} active={activeSection === 'fila-atendimento'}>
          <span className="nav-text">Fila de Atendimento</span>
          <i className={activeSection === 'fila-atendimento' ? "fas fa-play nav-icon" : "fas fa-chevron-right nav-icon"}></i>
        </NavItem>
        <NavItem as={Link} to="/reservas" onClick={() => handleNavClick('reservas')} active={activeSection === 'reservas'}>
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
