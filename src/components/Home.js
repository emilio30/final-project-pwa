// src/components/Home.js
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

function Home() {
  // const funnyImages = [
  //   'https://placekitten.com/200/200',
  //   'https://placebeard.it/200x200',
  //   'https://www.placecage.com/200/200',
  //   // Añade más URLs de imágenes divertidas según sea necesario
  // ];
  const images = [
    'https://placekitten.com/200/200',
    'https://placekitten.com/201/200',
    'https://placekitten.com/202/200',
    // Agrega más URLs de imágenes divertidas
  ];
  return (
    <>
    {/* <Container className="mt-4">
      <h2 className="mb-4">Imágenes Divertidas</h2>
      <Row>
        {funnyImages.map((imageUrl, index) => (
          <Col key={index} xs={12} md={4} className="mb-4">
            <Image src={imageUrl} alt={`Imagen ${index + 1}`} rounded fluid />
          </Col>
        ))}
      </Row>
    </Container> */}
    <Container>
      <Row className="mt-5">
        <Col md={6}>
          <Image
            src="https://media.licdn.com/dms/image/D4E12AQFH4nTpvVSstQ/article-cover_image-shrink_720_1280/0/1668031052760?e=2147483647&v=beta&t=_cdze6FPdKsQUtzTeXDaZoKuXpgS_9ezjflsAXviAJU" // Coloca la ruta de tu logotipo
            alt="Enigma Solutions Inc"
            fluid
            rounded
          />
        </Col>
        <Col md={6}>
          <h2>Enigma Solutions Inc</h2>
          <p>
            Enigma Solutions Inc es una empresa líder en desarrollo de
            software comprometida con la entrega de soluciones tecnológicas
            innovadoras y de alta calidad.
          </p>
          <p>
            Nuestro equipo de expertos en desarrollo de software está
            dedicado a crear aplicaciones web y móviles que impulsan el
            éxito de nuestros clientes.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={6}>
          <p>
            Ofrecemos una amplia gama de servicios, que incluyen desarrollo
            de software a medida, consultoría tecnológica, diseño de
            interfaces de usuario y más.
          </p>
          <p>
            Enigma Solutions Inc se enorgullece de ser un socio confiable y
            estratégico para empresas que buscan transformar su visión
            digital en realidad.
          </p>
        </Col>
        <Col md={6}>
          <Image
            src="https://agenciadigitalamd.com/wp-content/uploads/2021/04/desarrollo-de-software-bogota-800x534-1.jpg" // Coloca la ruta de una imagen de la oficina o equipo
            alt="Oficina de Enigma Solutions"
            fluid
            rounded
          />
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Home;
