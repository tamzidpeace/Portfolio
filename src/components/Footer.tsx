import React, { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  {
    icon: AiFillGithub,
    url: "https://github.com/arafatkat",
    label: "GitHub",
  },
  {
    icon: AiOutlineTwitter,
    url: "https://twitter.com/arafat_kamal_",
    label: "Twitter",
  },
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/arafat-kamal-8a7184194/",
    label: "LinkedIn",
  },
  {
    icon: AiFillInstagram,
    url: "https://www.instagram.com/arafat.kamal.3/",
    label: "Instagram",
  },
];

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Arafat Kamal</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {currentYear} AK</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {socialLinks.map((link, index) => (
              <li key={index} className="social-icons">
                <a
                  href={link.url}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <link.icon />
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
});

Footer.displayName = 'Footer';

export default Footer;