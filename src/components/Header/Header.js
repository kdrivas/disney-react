import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { auth, provider } from './../../firebase';
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState
} from './../../features/user/userSlice';

const Header = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged( async (user) => {
      if (user) {
        dispatch(setUserLoginDetails({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }));
        history.push('/home');
      }
    })
  }, [userName])

  const handleAuth = () => {
    if (!userName){
      auth.signInWithPopup(provider).then((result) => {
        dispatch(setUserLoginDetails({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL
        }));
      }).catch(error => {
        console.log(error);
      })
    }
    else {
      auth.signOut().then(() => {
        dispatch(setSignOutState());
        history.push('/');
      }).catch(error => {
        console.log(error);
      })
    }
  };
  console.log('hola', userPhoto);

  return (
    <Nav>
      <Logo>
        <img src="images/logo.svg"></img>
      </Logo>
      
      {!userName ? 
        <Login onClick={handleAuth}>
          LOGIN
        </Login> : 
        <>
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
          <SignOut>
            <UserImg src={userPhoto}/>
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>}
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
    width: 100% auto;
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

const UserImg = styled.img`
  height: 100%;
  border-radius: 50%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background-color: rgb(19,19,19);
  border: 1px solid rgba(151,151,151,0.39);
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  width: 100px;
  display: none;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;

  &:hover {
    ${DropDown} {
      display: block;
      opacity: 1;
      transition-duration: 0.25s;
    }
  }
`;

export default Header;