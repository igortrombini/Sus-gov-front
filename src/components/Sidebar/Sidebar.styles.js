import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 250px;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  img {
    border-radius: 50%;
    margin-right: 1rem;
  }
  p {
    font-weight: bold;
  }
  span {
    display: block;
    color: gray;
  }
  a {
    color: #007bff;
    text-decoration: none;
    font-size: 0.875rem;
  }
`;

export const Nav = styled.nav`
  width: 100%;
`;

export const NavItem = styled.div`
  padding: 1rem;
  text-align: left;
  width: 100%;
  &:hover {
    background-color: #e9ecef;
    cursor: pointer;
  }
`;
