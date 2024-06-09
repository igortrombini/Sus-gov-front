import React from 'react';
import { HeaderContainer, SearchBar, UserSection, IconContainer } from './Header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <SearchBar>
        <input type="text" placeholder="O que você procura?" />
        <button className="br-button">
          <i className="fas fa-search"></i>
        </button>
      </SearchBar>
      <UserSection>
        <IconContainer>
          <i className="fas fa-headset"></i>
        </IconContainer>
        <IconContainer>
          <i className="fas fa-comment-dots"></i>
        </IconContainer>
        <IconContainer>
          <i className="fas fa-lightbulb"></i>
        </IconContainer>
      </UserSection>
    </HeaderContainer>
  );
};

export default Header;
