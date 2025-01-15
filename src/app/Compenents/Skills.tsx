import React from "react";
import "../../style/skills.css"; 

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-grid">
        <div data-aos="zoom-in-up">
          <h2 className="skills-header">Key Skills</h2>
          <p className="skills-description">
            I possess a strong foundation in web development, with skills in HTML, CSS, JavaScript, and responsive design. I am constantly learning new technologies to enhance my expertise and build user-friendly websites.
          </p>
        </div>

        <div>
          <div className="skills-list" data-aos="zoom-in-up">
            <div>
              <h2>HTML</h2>
              <h2>CSS</h2>
              <h2>JavaScript</h2>
            </div>
            <div>
              <h2>Tailwind</h2>
              <h2>Next.js</h2>
              <h2>React</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
