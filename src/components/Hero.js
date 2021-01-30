import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="text-box">
        <h1>
          <span className="heading-primary">MTG-Ify</span>
          <span className="heading-sub">
            Magic: The Gathering Collection Database
          </span>
        </h1>
        <h4 className="button">
          <a href="#">Search For Card</a>
        </h4>

        <a href="#">
          <h4 className="button">Collection </h4>
        </a>
      </div>
    </div>
  );
};

export default Hero;
