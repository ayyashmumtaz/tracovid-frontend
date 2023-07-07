import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../assets/logo.png';

const Navbar = () => {
    return (
      <Nav>
        <Logo src={LogoImg}/> 
        <NavMenu>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/services">Services</NavItem>
          <NavItem href="/contact">Contact</NavItem>
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
  
  const NavItem = styled.a`
    color: #fff;
    font-weight: 600;
    font-family: 'Questrial', sans-serif;
    margin-left: 1.8rem;
    text-decoration: none;
  `;
  
  export default Navbar;