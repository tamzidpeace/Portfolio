import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle.jsx";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/Arafat_Kamal_CV.pdf";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";

export default function ResumeTest() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  
  return (
    <div>
      <Container
        fluid
        className="resume-section"
      >
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        <Row
          className="resume"
          style={{
            justifyContent: "center",
            position: "relative",
            width: "100%",
          }}
        >
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          
          <div
            style={{
              border: "1px solid rgba(0, 0, 0, 0.3)",
              height: "750px",
            }}
          >
            <Viewer fileUrl={pdf} />
          </div>
          </Worker>

          
        </Row>

        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            width: "100%",
          }}
        >
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}
