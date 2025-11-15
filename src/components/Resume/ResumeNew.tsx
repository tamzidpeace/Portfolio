import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle.tsx";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/Arafat_Kamal_CV.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Resume() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState<number>();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

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
          <div
            style={{
              border: "1px solid rgba(0, 0, 0, 0.3)",
              height: "750px",
              overflow: "auto",
              width: "100%",
              maxWidth: "800px",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#f8f9fa"
            }}
          >
            <Document
              file={pdf}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<div style={{ padding: "20px" }}>Loading PDF...</div>}
              error={<div style={{ padding: "20px", color: "red" }}>Error loading PDF</div>}
            >
              {Array.from(new Array(numPages), (_, index) => (
                <div key={`page_${index + 1}`} style={{ marginBottom: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                  <Page
                    pageNumber={index + 1}
                    scale={width > 1200 ? 1.2 : width > 786 ? 1.0 : 0.8}
                    loading={<div style={{ padding: "20px" }}>Loading page...</div>}
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                  />
                </div>
              ))}
            </Document>
          </div>
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