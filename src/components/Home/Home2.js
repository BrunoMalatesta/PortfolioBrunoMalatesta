import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Hi, I'm Bruno Malatesta a React Developer
              <br />
              <br />I'm trained to build highly interactive and scalable web applications
              <i>
                <b className="purple"> using the React.js library. </b>
              </i>
              <br />
              <br />
              I have experience building apps from scratch, as well as integrating React into existing apps. I use modern web development tools like  &nbsp;
              <i>
                <b className="purple">Redux, React Router, Webpack, Babel,</b> among others.{" "}
              </i>
              <br />
              <br />
              In addition, I am familiar with the use of web languages ​​such as <b className="purple">HTML</b> and
              <i>
                <b className="purple">
                  {" "}
                  CSS, and JavaScript
                </b>
              </i>
              &nbsp; and can create attractive and functional user interfaces. I also have skills in using additional libraries and frameworks like
              <i>
                <b className="purple"> Node.js.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
            let's create something <span className="purple">new </span>together
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/BrunoMalatesta"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/bruno-malatesta-206068224/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/bruno.fiorentini19/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
