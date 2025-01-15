import React from "react";

import "../../style/hero.css"; 

const Hero = () => {
  return (
    <div className="hero-container">
      
      <div className="hero-content-container">
        {/* Hidden on large screens */}
        <div className="hidden-lg"></div>
        
        {/* Hero Text */}
        <div className="hero-text">
          <div>
            <p data-aos="zoom-in-up">I am</p>
            <p data-aos="zoom-in-up">Sumaiya</p>
            <p data-aos="zoom-in-up">Qureshi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
