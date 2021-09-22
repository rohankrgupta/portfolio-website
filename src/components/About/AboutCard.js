import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Rohan Kumar Gupta</span>,
            <br />I am currently a Junior Year Computer Science Undergraduate enrolled in a Bachelors degree from NIT Durgapur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i>  Competitive Programming
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Star gazing
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Watching Documentaries
            </li>
          </ul>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
