import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/ROHANKRGUPTA-RESUME.pdf";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
      
            <Resumecontent
              title="Summer Research Intern | NIT Durgapur"
              date="May 2021 - July 2021"
              content={[
                "Analysed various existing machine-learning algorithms and their relative performance towards perception analysis of facial expressions.",
                "Developed a multi-view regression model in Keras to improve the feature generalisation ability on existing data sets, resulting in improvement of coefficient of determination score by 20%.",
              ]}
            />
            <h3 className="resume-title">Online Courses & Certifications</h3>
            <Resumecontent
              title="The Complete Node.js Developer Course (3rd Edition)"
              date = "Sept 2021"
              content={[
                "Udemy",
              ]}
            />
            
            <Resumecontent
              title="Machine Learning by Stanford University"
              date="Dec 2020"
              content={[
                "Coursera",
              ]}
            />

            <Resumecontent
              title="Neural Networks and Deep Learning"
              date="Sept 2020"
              content={[
                "Coursera",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="National Institute of Technology Durgapur"
              date="2019 - Present"
              content={[
                `BTech, Computer Science Engineering`,
                `CGPA : 9.08/10`
              ]}
            />
            <Resumecontent
              title="Vivekananda Kendra Vidyalaya"
              date="2011 - 2018"
              content={[
                `High School`,
                `AISSCE - 94.8 % (CBSE)`,
                `AISSE - 10 CGPA (CBSE)`
              ]}
            />
      
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title=""
              content={[
                `Ranked 2819 globally at Google Kickstart Round E - 2021`,
                `Active participation on online competitive coding websites - CodeForces, Spoj, Atcoder, etc. Member
                Handle - Darkknight811 (max. specialist)`,
                `Participated in Hackathon - Amazon HackOn 2021`,
                `Member at Math & Tech Club, NITDGP`
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
