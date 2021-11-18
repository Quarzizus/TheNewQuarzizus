import React, { Suspense } from "react";
const Project = React.lazy(() => import("../components/Project"));
import Loader from "../components/Loader";
import { initialState } from "../context/initialState";
import "../styles/routes/Projects.scss";

const Projects = () => {
  return (
    <section className="Projects">
      <h2>Projects</h2>
      {initialState.map((project) => {
        return (
          <Suspense fallback={<Loader />} key={project.id}>
            <Project
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
