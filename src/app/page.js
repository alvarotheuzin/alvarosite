'use client'

import { Container, Nav, Row, Col, Card } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import alvaro from "./imagens/alvaro.jpg";
import Footer from "./components/footer";
import { FaJsSquare, FaHtml5, FaCss3Alt, FaBook, FaBriefcase, FaRobot } from 'react-icons/fa';
import { RiPhpLine, RiEnglishInput } from "react-icons/ri";
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
                  <Card.Title className="title-container">
                    <div className="icon5">
                      <FaBook />
                    </div>
                    Formação Acadêmica
                  </Card.Title>
                  <Card.Text className="cardtext">
                    Cursando Análise e Desenvolvimento de Sistemas - IESB
                  </Card.Text>
                  <Card.Title className="title-container">
                    <div className="icon5">
                      <FaBook />
                    </div>
                    Cursos
                  </Card.Title>
                  <Card.Text className="cardtext">
                    <FaJsSquare className="iconcursos" /> JavaScript
                  </Card.Text>
                  <Card.Text className="cardtext">
                    <RiPhpLine className="iconcursos" /> PHP Moderno
                  </Card.Text>
                  <Card.Text className="cardtext">
                    <RiEnglishInput className="iconcursos" />Inglês
                  </Card.Text>
                  <Card.Text className="cardtext">
                    <FaRobot className="iconcursos" />Robótica
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title className="title-container">
                    <div className="icon5">
                      <FaBriefcase />
                    </div>
                    Formação Acadêmica
                  </Card.Title>
                  <Card.Text className="tcdf-title">TCDF - Estagiário</Card.Text>
                  <Card.Text className="tcdf-date">01/2020 - 01/2021</Card.Text>
                  <Card.Text className="tcdf-text">
                    Estagiário no TCDF, apoiando na análise de processos e elaboração de relatórios jurídicos.
                  </Card.Text>
                  <Card.Text className="tcdf-title">Efatá Informática - Técnico/Vendedor</Card.Text>
                  <Card.Text className="tcdf-date">05/2023 - Atual</Card.Text>
                  <Card.Text className="tcdf-text">
                    Estagiário no TCDF, apoiando na análise de processos e elaboração de relatórios jurídicos.
                  </Card.Text>
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
