import React from 'react';
import { Navbar, Container, Nav, } from 'react-bootstrap';
//import {  Link } from "react-router-dom";


const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="/">Kyle T Chiu</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">Abouts</Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Navigation;
