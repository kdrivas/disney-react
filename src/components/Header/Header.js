import React from 'react';
import styled from 'styled-components';

const Header = props => {
  return (
    <Nav>
      <Logo>
        <img src="images/logo.svg"></img>
      </Logo>
      <NavMenu>
        <a href="/home">
          <img src="images/home-icon.svg"></img>
        </a>
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 3;
`;

const Logo = styled.a`
  width: 80px;
  padding: 0;
  font-size: 0;
  margin-top: 4px;
  display: inline-block;

  img {
    display: block;
    width: 100%auto;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  padding: 0;
  margin-right: auto;
  margin-left: 25px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Header;