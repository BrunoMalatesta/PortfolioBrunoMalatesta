import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import html from "../../Assets/Projects/html.png";
import js from "../../Assets/Projects/js.png";
import reactimg from "../../Assets/Projects/reactimg.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactimg}
              isBlog={false}
              title="Las Condes E-Commerce"
              description="Electronic commerce developed in conjunction with Mr. Montecalvo for Las Condes bookstore created with react.js, react-router-dom, Material-UI, SweetAlert2, SASS and Firebase. It has functions that allow the user to send messages in real time, make purchases in real time and manage stock. The work got 10/10 in React.js CoderHouse Academy."
              ghLink="https://github.com/BrunoMalatesta/React-Proyect-Conde"
              demoLink="https://lascondes.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={js}
              isBlog={false}
              title="Casa Stella"
              description="Electronic commerce developed for the Casa Stella bookstore created with JavaScript.js, Html, Css, Git and Node.js and Anime.js (library) It has functions that allow the user to send emails to the company, simulate purchases.
              The work got 10/10 in JavaScript.js CoderHouse Academy."
              ghLink="https://github.com/BrunoMalatesta/Casa-Stella-e-commerce"
              demoLink="https://brunomalatesta.github.io/Casa-Stella-e-commerce/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={html}
              isBlog={false}
              title="Puerto Deseado Tourism"
              description="First Web Page, Developed for the municipality of Puerto Deseado Argentina, focusing on its natural reserve with abundant Fauna and Flora as well as its History and Tourist Activities.
              It has information on hotels and restaurants.
              Created only based on HTML5, CSS AND SASS. applying first knowledge in Git and GitHub.The work got 9/10 in Desarollo Web CoderHouse Academy."
              ghLink="https://github.com/BrunoMalatesta/turismoPUERTODESEADO/tree/master"
              demoLink="https://brunomalatesta.github.io/turismoPUERTODESEADO/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
