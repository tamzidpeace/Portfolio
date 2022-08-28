import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
