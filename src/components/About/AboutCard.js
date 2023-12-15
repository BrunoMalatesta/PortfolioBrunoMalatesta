import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bruno Malatesta </span>
            from <span className="purple"> Puerto Deseado, Argentina.</span>
            <br />I'm a junior front end programmer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking gourmet food
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel and see places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Let's make a difference for a better future!"{" "}
          </p>
          <footer className="blockquote-footer">Malatesta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
