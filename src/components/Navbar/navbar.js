import React from 'react';
import { Navbar , Container, Nav, } from 'react-bootstrap';
//import {  Link } from "react-router-dom";


const Navigation= () =>{
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Kyle T Chiu</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">Abouts</Nav.Link>
        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  </>
  );
}
export default Navigation;
