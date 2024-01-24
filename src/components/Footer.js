import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../img/logo.png';
import App from '../App.scss';

function Footer() {
  return (
    <Container>
      <Navbar>
        <Navbar.Brand className={App.footerBrand} href="#home">
          {logo && <img src={logo} alt="Logo Image" className={App.footerLogo} />}
          QuantumSky Solutions
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={App.footer}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Solutions</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Footer;