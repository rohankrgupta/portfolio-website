import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Made by Rohan Kumar Gupta</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} RKG</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/rohankrgupta"
                style={{ color: "white" }}
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            
            <li className="social-icons">
              <a
                  href="https://www.linkedin.com/in/rohan-kr-gupta-173b8a18a/"
                style={{ color: "white" }}
              >
                <i className="fab fa-dribbble"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="mailto:rohankrgupta2000@gmail.com"
                style={{ color: "white" }}
              >
                  <i className="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
