import React from 'react';
import styled from 'styled-components';
import { auth, provider } from './../../firebase';

const Header = props => {

  const handleAuth = () => {
    auth.signInWithPopop(provider).then((result) => {
      console.log(result);
    }).catch(error => {
      console.log(error);
    })
  };

  return (
    <Nav>
      <Logo>
        <img src="images/logo.svg"></img>
      </Logo>
      <NavMenu>
        <a href="/home">
          <img src="images/home-icon.svg" alt="HOME"></img>
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="SEARCH" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="ORIGINALS" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="MOVIES" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="SERIES" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <Login onClick={handleAuth}>
        LOGIN
      </Login>
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
  padding: 0;
  margin-right: auto;
  margin-left: 25px;
  text-align: center;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;

    img {
      height: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(295, 295, 295);
      font-size: 13px;
      letter-spacing: 1.42px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        bottom: -6px;
        left: 0;
        right: 0;
        position: absolute;
        content: "";
        height: 2px;
        opacity: 0;
        transform-origin: center left;
        transform: scaleX(0);
        transition: all 250ms linear;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        visibility: visible;
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const Login = styled.a`
  border-radius: 4px;
  padding: 8px 16px;
  letter-spacing: 1.5px;
  border: solid 1px #f9f9f9;
  transition: all 100ms ease-in;

  &:hover {
    background-color: #f9f9f9;
    color: black;
  }
`;

export default Header;