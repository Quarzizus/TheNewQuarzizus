import "./styles.scss";
import { initialState } from "../../context/initialState";
import { Suspense, lazy } from "react";
import Loader from "../../components/Loader";
const Project = lazy(() => import("../../components/Project"));

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
