import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import BlogCard from "../About/BlogsCards";
import codeforces from "../../Assets/Projects/codeforces.png"
import leetcode from "../../Assets/Projects/leetcode.png"
function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
           <strong className="purple">Languages</strong> 
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-c-plain colored" />
          <Techstack iconName="devicon-cplusplus-plain" />
          <Techstack iconName="devicon-javascript-plain colored" />
          <Techstack iconName="devicon-python-plain-wordmark" />         
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Tools, Libraries and Frameworks</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Techstack iconName="devicon-nodejs-plain-wordmark " />
          <Techstack iconName="devicon-express-original-wordmark" />
          <Techstack iconName="devicon-react-original-wordmark" />
          <Techstack iconName="devicon-bootstrap-plain-wordmark" />
          <Techstack iconName="devicon-postgresql-plain-wordmark" />
          <Techstack iconName="devicon-mongodb-plain-wordmark" />
          <Techstack iconName="devicon-tensorflow-original-wordmark" />
          <Techstack iconName="devicon-git-plain-wordmark" />
        </Row>
        {/* <h1 className="project-heading">
          <strong className="purple">GitHub Contributions</strong> 
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="cib-visual-studio-code" />
          <Techstack iconName="devicon-atom-original" />
          <Techstack iconName="devicon-vim-plain" />
        </Row> */}
         <h1 className="project-heading">
           <strong className="purple"> Competitive </strong> Coding Profile
        </h1>
        <p style={{ color: "white" }}></p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath= {codeforces}
              link="https://codeforces.com/profile/Buddhistmonk"
              title="CodeForces"
              site="codeforces.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath= {leetcode}
              link="https://codingcompetitions.withgoogle.com/kickstart/certificate/summary/0000000000435bad"
              title="Google KickStart"
              site="codingcompetitions.withgoogle.com"
            />
          </Col>
        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
