import React from 'react';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { BiSend } from "react-icons/bi";

const Footer = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('seu-email@exemplo.com');
  };

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={12} md={4} className="mb-4">
            <h3 className="footer-title">Álvaro Matheus A. Silva</h3>
            <p className="text-muted">Analista e Desenvolvedor de Sistemas.</p>
            <div className="d-flex gap-2">
              <a href="https://github.com/alvarotheuzin" className="text-muted">
                <FaGithub size={25} className='iconhub'/>
              </a>
              <Button variant="link" onClick={handleCopyEmail} className="text-mute" aria-label="Copiar email">
                <FaEnvelope size={25} className='iconhub'/>
              </Button>
            </div>
          </Col>

          <Col xs={12} md={4} className="mb-4">
            <h3 className="footer-title">Links Rápidos</h3>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-muted">Home</Nav.Link>
              <Nav.Link href="#" className="text-muted">Projetos</Nav.Link>
              <Nav.Link href="#" className="text-muted" id="downloadCV">Download CV</Nav.Link>
            </Nav>
          </Col>

          <Col xs={12} md={4} className="mb-4">
            <h3 className="footer-title">Contato</h3>
            <p className="text-muted mb-2">Vamos trabalhar juntos? Entre em contato!</p>
            <a href="mailto:alvaroalvin10@gmail.com" className="d-flex align-items-center text-muted">
              <BiSend size={25} className="mr-2 bi-send" />
              <span>Enviar mensagem</span>
            </a>
          </Col>
        </Row>

        <Row className="footer-bottom-line"></Row>

        <Row>
          <Col className="text-center">
            <p className="text-muted">
              &copy;2025 Álvaro Matheus A. Silva
            </p>
          </Col>
        </Row>  
      </Container>
    </footer>
  );
};

export default Footer;
