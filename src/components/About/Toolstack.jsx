import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiPostman,
  SiAndroidstudio,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import {FiFigma} from 'react-icons/fi'

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscCode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FiFigma />
      </Col>
    </Row>
  );
}

export default Toolstack;
