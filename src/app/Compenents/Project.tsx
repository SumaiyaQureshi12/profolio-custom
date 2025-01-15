import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import "../../style/project.css"; 

const data = [
  {
    id: 0,
    title: "Static resume",
    desc: "A responsive static resume built with HTML and CSS, showcasing personal information skills, and experience in a clean and organized layout.",
    img: "/project0.jng.png",
    tags: ["HTML", "CSS", "TYPESCRIPT"],
  },
  {
    id: 1,
    title: "Dynamic resume",
    desc: "A dynamic resume built using HTML, CSS, and JavaScript, featuring interactive sections, real-time updates, and enhanced user experience for showcasing skills and experience",
    img: "/porject1.jng.png",
    tags: ["HTML", "CSS", "TYPESCRIPT"],
  },
  {
    id: 2,
    title: "Editable resume",
    desc: "An editable resume built with HTML, CSS, and JavaScript, allowing users to update personal details, skills, and experience directly on the page for quick customization",
    img: "/project2.jng.png",
    tags: ["HTML", "CSS", "TYPESCRIPT"],
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <Heading title="My Projects" />
      <div className="projects-grid">
        {data.map((el) => (
          <div className="card" key={el.id}>
            <Card
              title={el.title}
              desc={el.desc}
              img={el.img}
              tags={el.tags}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
