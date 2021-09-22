import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "../About/BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import simon from "../../Assets/Projects/simon.png";
import magic from "../../Assets/Projects/magic.png";
import phoenix from "../../Assets/Projects/phoenix.png";
import hp from "../../Assets/Projects/hp.png";
import task from "../../Assets/Projects/magic.jpg";
import algo from "../../Assets/Projects/algo.png";
import plant from "../../Assets/Projects/plant.jpeg";
import unidays from "../../Assets/Projects/unidays.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few select projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simon}
              isBlog={false}
              title="Secure Chat Application"
              description=" A Web application that uses RSA Encryption to encrypt and securely deliver user messages. Used websockets (socket.io) to enable bi-directional communication."
              link="https://tranquil-bastion-20902.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phoenix}
              isBlog={false}
              title="Covid - 19 Detector"
              description= "Developed a ML model that uses CNN (ResNet-18) to classify lung X-rays into
              covid-19/normal/viral (pneumonia) using transfer learning. Achieved 95 % accuracy on testset."
              link="https://github.com/rohankrgupta/AI-Based-Covid-19-Detection-Deep-Learning"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unidays}
              isBlog={false}
              title="Club App"
              description="An android application for college club, Implemented features like group chat and authentication via Firebase Database.
              Technologies used - Kotlin, Firebase Database"
              link="https://github.com/rohankrgupta/ClubApp-Android"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="Task Assistant Application"
              description="A web application for daily task management of users.  Included security features like bcrypt algorithm for user password hashing and REST APIs."
              link="https://github.com/rohankrgupta/Task-Appication"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hp}
              isBlog={false}
              title="Weather Forecast Application"
              description="A Web Application made with Node.js. Uses API calls to fetch geolocation and retrieve the weather forecast data to the user using backend server deployed on Heroku."
              link="https://rkg-weather-application.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={magic}
              isBlog={false}
              title="Orca Call Classifier"
              description=" An Orca Call classifier using mel-spectrograms as audio representations to detect Killer whales via Random Decision Forests"
              link="https://github.com/rohankrgupta/Orca-call-Classifier-Machine-learning"
            />
          </Col>

        </Row>
       
      </Container>
    </Container>
  );
}

export default Projects;
