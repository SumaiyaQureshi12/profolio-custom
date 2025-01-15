import React from "react";
import "../../style/about.css"

const About = () => {
  return (
    <div id="about">
      {/* Section Heading */}
      <h2>
        About Me
      </h2>

      {/* Section Content */}
      <div className="sectionContent">
        {/* Text Content */}
        <div className="textContent">
          <p>
            Hello! I am a passionate developer with a keen interest in building
            responsive, user-friendly web applications. I specialize in HTML,
            CSS, TypeScript, and frameworks like Next.js. My goal is to create
            impactful digital experiences that solve real-world problems.
          </p>
          <p>
            With a focus on clean code and modern design principles, I love
            turning ideas into functional, beautiful interfaces. When I am not
            coding, you might find me exploring new technologies or working on
            exciting personal projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
