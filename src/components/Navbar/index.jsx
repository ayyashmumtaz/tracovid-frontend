import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Nav>
      <Logo src={LogoImg} />
      <NavMenu>
        <NavItem><Link to="/" >GLOBAL</Link></NavItem>
        <NavItem><Link to="/about" >ABOUT</Link></NavItem>
        <NavItem><Link to="/provinsi" >PROVINSI</Link></NavItem>
        <NavItem><Link to="/indonesia" >INDONESIA</Link></NavItem>
      </NavMenu>
    </Nav>
  );
};

// Style untuk komponen navbar
const Nav = styled.nav`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: background-color 0.3s ease;
  z-index: 1000;
    font-family: 'Questrial', sans-serif;
    background: #06D6A0;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    padding: 10px;
  `;

const Logo = styled.img`
  padding-left: 10px;

    width: 200px;
    
  `;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;

  `;

const NavItem = styled.div`
    color: #fff;
    font-weight: 600;
    font-family: 'Questrial', sans-serif;
    margin-left: 1.8rem;
    text-decoration: none;
  `;

export default Navbar;