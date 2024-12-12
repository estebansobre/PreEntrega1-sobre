// src/components/NavBar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import CartWidget from './CartWidget'; // Importamos el componente CartWidget

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Vino Deluxe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#shop">Tienda</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#category1">Vinos Tintos</NavDropdown.Item>
              <NavDropdown.Item href="#category2">Vinos Blancos</NavDropdown.Item>
              <NavDropdown.Item href="#category3">Vinos Rosados</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget /> {/* Aquí agregamos el CartWidget */}
      </Container>
    </Navbar>
  );
};


export default NavBar;

