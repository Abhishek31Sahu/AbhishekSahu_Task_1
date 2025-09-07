import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Education Portal</h5>
            <p>
              Bridging traditional wisdom and modern technology to empower
              learners across India. Our platform supports AYUSH integration,
              health-tech innovation, and real-world skill development.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <p>
              &copy; {new Date().getFullYear()}made by Abhishek Sahu All rights
              reserved.
            </p>
            <p>
              Made with ❤️ in Kanpur by passionate developers and visionaries.
            </p>
            <p>
              <a href="/privacy" className="text-light text-decoration-none">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="/terms" className="text-light text-decoration-none">
                Terms of Use
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
