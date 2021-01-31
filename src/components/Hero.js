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
        {/* Style this part when you get back, try it without a div or anything wrapping it, try to get it to scale */}
        <div className="btn-box">
          <a href="#" className="btn">
            Search
          </a>
          <a href="#" className="btn">
            Collection
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
