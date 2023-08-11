import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "portfolio\src\Assets\flower.jpg"; // home image 2
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a B.Tech Artificial Intelligence and Data Science Student. I love coding and I am good at Machine Learning with Python.
              <br />
              <br />I am learning
                <b className="blue"> Three.js, ReactJS, Cloud Computing now. </b>
              
              <br />
              <br />
              I am curious about Cloud and Web Technologies.
              <br />
              <br />
              <b className="yellow">Playing Guitar and Photography are my passions.</b>
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
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vaishhhx"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            
              <li className="social-icons">
                <a
                  href="www.linkedin.com/in/vaishali-v-29881b225"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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