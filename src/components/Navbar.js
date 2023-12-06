import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container, NavDropdown } from 'react-bootstrap';
import { Outlet } from 'react-router-dom/dist';
import addNotification from 'react-push-notification';
import logo from '../images/cuin.jpg'

const CustomNavbar = () => {

    const clickToNotify = () => {
        addNotification({
            title: 'Bienvenido',
            message: 'consulta nuestras promociones',
            duration: 5000,
            icon: logo,
            native: true
        })
    }
  return (
    <>
    <Navbar bg="primary" expand="lg" data-bs-theme="dark">
        <Container>
      <Navbar.Brand>
        Mi App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Inicio
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            Acerca de
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contacto
          </Nav.Link>
        </Nav>
        <Nav>
            <Nav.Link onClick={clickToNotify}>Enviar Notificación Push</Nav.Link>            
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
    </>
  );
};

export default CustomNavbar;
