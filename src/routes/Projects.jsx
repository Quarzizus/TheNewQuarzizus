import React from "react";
import Project from "../components/Project";
import { initialState } from "../context/initialState";
import "../styles/routes/Projects.scss";

const Projects = () => {
  return (
    <section className="Projects">
      <h2>Projects</h2>
      {initialState.map((project) => {
        return (
          <Project
            img={project.image}
            title={project.title}
            description={project.description}
            repo={project.repo}
            page={project.page}
          />
        );
      })}
    </section>
  );
};

export default Projects;
