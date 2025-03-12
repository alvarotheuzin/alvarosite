'use client'

import { Container, Nav, Row, Col, Card } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import alvaro from "./imagens/alvaro.jpg";
import Footer from "./components/footer";
import { FaJsSquare, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiReactbootstrap } from "react-icons/si";

export default function Page() {
  return (
    <div className="page-container">
      <Container className="main-content">
        <header>
          <Nav className="d-flex justify-content-between align-items-center">
            <h1>Álvaro Matheus Alves da Silva</h1>
            <a
              href="https://github.com/alvarotheuzin"
              className="github-icon ms-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={35} />
            </a>
          </Nav>
        </header>

        <main>
          <div className="image-container text-center mb-4">
            <Image
              src={alvaro}
              alt="Foto de Álvaro"
              width={280}
              height={280}
              priority
              style={{ borderRadius: "50%", border: "5px solid #6f42c1" }}
            />
          </div>
          <h2 className="title-text text-center">Analista e Desenvolvedor de Sistemas</h2>
          <p className="sub-text text-center">Estudante de Análise e Desenvolvimento de Sistemas, em busca de aprimorar habilidades técnicas e teóricas na área de tecnologia.</p>

          <div className="spandiv text-center mb-4">
            <span className="spanicon me-3">
              <FaJsSquare className="icon1" /> JavaScript
            </span>
            <span className="spanicon me-3">
              <FaHtml5 className="icon2" /> HTML5
            </span>
            <span className="spanicon me-3">
              <FaCss3Alt className="icon3" /> CSS3
            </span>
            <span className="spanicon">
              <SiReactbootstrap className="icon4" /> ReactBootstrap
            </span>
          </div>

          <Row>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Formação Acadêmica</Card.Title>
                  <Card.Text>Análise e Desenvolvimento de Sistemas - IES</Card.Text>
                  <Card.Title>Cursos</Card.Title>
                  <Card.Text>PHP, JavaScript</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Experiência Profissional</Card.Title>
                  <Card.Text>Desenvolvedor Web - Empresa XYZ</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </main>
      </Container>

      <Footer />
    </div>
  );
}
