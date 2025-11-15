import React, { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "@/Assets/home-main.png";
import Particle from "@/components/Particle.tsx";
import Home2 from "@/components/Home/Home2.jsx";
import Type from "@/components/Home/Type.jsx";

const Home: React.FC = memo(() => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Arafat </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img 
                src={homeLogo} 
                alt="home pic" 
                className="img-fluid"
                loading="lazy"
                width="100%"
                height="auto"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
});

Home.displayName = 'Home';

export default Home;