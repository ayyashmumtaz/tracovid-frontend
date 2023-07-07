import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Nav>
      <Logo src={LogoImg} />
      <NavMenu>
        <NavItem><Link to="/" >Global</Link></NavItem>
        <NavItem><Link to="/about" >About</Link></NavItem>
        <NavItem><Link to="/provinsi" >Provinsi</Link></NavItem>
        <NavItem><Link to="/indonesia" >Indonesia</Link></NavItem>
      </NavMenu>
    </Nav>
  );
};

// Style untuk komponen navbar
const Nav = styled.nav`
    @import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
    font-family: 'Questrial', sans-serif;
    background: #06D6A0;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    border-radius: 20px;
    padding: 10px;
  `;

const Logo = styled.img`
  padding-left: 10px;

    width: 100px;
    
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