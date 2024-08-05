import React from "react";
import "./Card.css"; // Import the CSS file
import { FaGithub } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

const Card = ({ image, heading, description, technologies, link1, link2 }) => {
  return (
    <div className="card">
      <img src={image} alt="placeholder" className="card-image" />
      <h2 className="card-heading">{heading}</h2>
      <p className="card-description">{description}</p>
      <div className="card-technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
      <div className="card-icons">
        <a href={link1}>
          <FaGithub />
        </a>
        <a href={link2}>
          <BiWorld />
        </a>
      </div>
    </div>
  );
};

export default Card;
