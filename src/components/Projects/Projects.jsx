import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards.jsx";
import Particle from "../Particle.jsx";

import hishabi from "../../Assets/Projects/hishabi.png";
import jibonsheba from "../../Assets/Projects/jibonsheba.png";
import limadi from "../../Assets/Projects/limadi.png";
import ibm from "../../Assets/Projects/ibm1.png";
import maway from "../../Assets/Projects/maway.png";
import unimass_portfolio from '../../Assets/Projects/unimass_portfolio.png'
import ebox_live from '../../Assets/Projects/ebox-live.png'


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Hishabi */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hishabi}
              isBlog={false}
              title="Hishabi"
              description="Inventory & POS system built with Laravel and Vue. Multi-package architecture, REST APIs, real-time reporting."
              link="https://hishabi.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jibonsheba}
              isBlog={false}
              title="Jibon Sheba"
              description="Diagnostic management system. Role-based access, lab test tracking, automation workflows."
              link="https://jibonsheba.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={limadi}
              isBlog={false}
              title="Limadi"
              description="Fleet management platform with real-time route optimization, vehicle tracking. Laravel backend, Flutter app, React admin dashboard."
              link="https://limadi.dk"
            />
          </Col>

          {/* IBM */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ibm}
              isBlog={false}
              title="IBM"
              description="A School Management System for Ibrahim Memorial Shikkha Niketon. This system allows the school to manage the students, teachers, and parents. It also allows the school to manage the school's admission and the school's events."
              link="https://ibm.orbitsource.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maway}
              isBlog={false}
              title="Maway"
              description="Driving Management System for Maway. This system allows the school to manage the instructors and students. Instructors can spread their skills to students from renowned schools. Students can learn from the instructors and can ..."
              link="https://maway.atiar.info/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unimass_portfolio}
              isBlog={false}
              title="Unimass"
              description="Since its inception in 2010, Unimass Holdings Ltd. creates greater value of living for its Clients, Landowners and Stakeholders. Unimass Holdings Ltd. has made it a success story by establishing long term mutually beneficial relationship..."
              link="https://unimassportfolio.atiar.info/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ebox_live}
              isBlog={false}
              title="Ebox-Live"
              description="An FTP Media Server. To enjoy free movies, tv series, and documentaries you can visit here. The latest Multimedias are available here. Contents are regularly updated. The most valuable thing about this server is ...."
              link="http://103.49.168.173/home"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
