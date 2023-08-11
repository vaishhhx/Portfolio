import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey, I'm <span className="blue">Vaishali V</span>
            <span className="blue"> from Coimbatore, TamilNadu, India.</span>
            <br /><span className="purple">I am currently pursuing my 3rd year in B.Tech Artificial Intelligence and Data Science in Kumaraguru College of Technology.</span>
            <br />
            I have great interest in the fields of Machine Learning and Metaverse.
            <br />
            <br />
            Apart from my academics I am passionate about various stuffs.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(126, 155, 172)" }}>
            "Always Blooming"{" "}
          </p>
          <footer className="blockquote-footer">Vaishali V</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;