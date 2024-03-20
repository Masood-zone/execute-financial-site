import React from "react";
import "./about.css";
import { johnDoe } from "../../assets/images/index";

function About() {
  return (
    <div className="about">
      {/* Image */}
      <div className="container">
        <img src={johnDoe} alt="john-image" />
        {/* Content */}
        <div className="col-2">
          <h2>About</h2>
          <span className="line"></span>
          <p>
            This is a sample work that can be edited to suit users needs and
            wants, in case there is one. This is a sample work that can be
            edited to suit users needs and wants, in case there is one. This is
            a sample work that can be edited to suit users needs and wants, in
            case there is one.
          </p>
          <p>
            He is John Doe, a senior advisor for an indpendently owned financial
            planning company called Intense.
          </p>
          <button className="button">Explore More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
