import { HeaderContainer, SearchBar, UserIcon } from './Header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <SearchBar>
        <input type="text" placeholder="O que você procura?" />
        <button className="br-button">
          <i className="fas fa-search"></i>
        </button>
      </SearchBar>
      <UserIcon>
        <i className="fas fa-user-circle"></i>
      </UserIcon>
    </HeaderContainer>
  );
};

export default Header;
