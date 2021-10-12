import React, { Suspense } from "react";
const Project = React.lazy(() => import("../components/Project"));
import { initialState } from "../context/initialState";
import "../styles/routes/Projects.scss";

const Projects = () => {
  return (
    <section className="Projects">
      <h2>Projects</h2>
      {initialState.map((project) => {
        return (
          <Suspense fallback={<h1>Holiwi...</h1>}>
            <Project
              key={project.id}
              img={project.image}
              title={project.title}
              description={project.description}
              repo={project.repo}
              page={project.page}
            />
          </Suspense>
        );
      })}
    </section>
  );
};

export default Projects;
