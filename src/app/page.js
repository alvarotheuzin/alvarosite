'use client'

import { Container, Nav } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import alvaro from "./imagens/alvaro.jpg";
import Footer from "./components/footer";

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
          <div className="image-container">
            <Image 
              src={alvaro}  
              alt="Foto de Álvaro" 
              width={280} 
              height={280}
              priority
              style={{ borderRadius: "50%", border: "5px solid #6f42c1" }} 
            />
          </div>
          <h2 className="title-text">Analista e Desenvolvedor de Sistemas</h2>
          <p className="sub-text">Estudante de Análise e Desenvolvimento de Sistemas, em busca de aprimorar habilidades técnicas e teóricas na área de tecnologia.</p>
        </main>
      </Container>

      <Footer />
    </div>
  );
}
