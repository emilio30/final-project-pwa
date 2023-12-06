// src/components/Contact.js
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Contact() {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h2>Contacto</h2>
          <p>
            ¿Tienes alguna pregunta o comentario? ¡Estamos aquí para
            ayudarte! Puedes ponerte en contacto con nosotros a través de
            los siguientes medios:
          </p>
          <ul>
            <li>Correo Electrónico: info@enigmasolutions.com</li>
            <li>Teléfono: +52 123 456 789</li>
            <li>Dirección: Av. Tecnología 123, Ciudad de México</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
