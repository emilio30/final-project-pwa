// src/components/About.js
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function About() {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h2>Sobre Nosotros</h2>
          <p>
            Enigma Solutions Inc es una empresa líder en el desarrollo de
            software. Nuestro equipo está formado por profesionales
            altamente calificados y apasionados por la tecnología.
          </p>
          <p>
            Nos especializamos en crear soluciones innovadoras que impulsen
            el éxito de nuestros clientes. Con años de experiencia en la
            industria, hemos entregado proyectos exitosos en diversas
            áreas, desde aplicaciones web hasta soluciones empresariales a
            medida.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
