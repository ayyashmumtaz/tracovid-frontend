import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
    return (
      <Nav>
        <Logo href="/">Logo</Logo>
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
  `;
  
  const Logo = styled.a`
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
  `;
  
  const NavMenu = styled.div`
    display: flex;
    align-items: center;
  `;
  
  const NavItem = styled.a`
    color: #fff;
    margin-left: 1.5rem;
    text-decoration: none;
  `;
  
  export default Navbar;