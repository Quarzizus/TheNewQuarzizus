import "./styles.scss";
import { initialState } from "../../context/initialState";
import { Suspense, lazy } from "react";
import Loader from "../../components/Loader";
const Project = lazy(() => import("../../components/Project"));

const Projects = () => {
  return (
    <section className="Projects">
      <h2>Proyectos personales</h2>
      {initialState.map((project) => {
        return (
          <Suspense fallback={<Loader />} key={project.id}>
            <Project {...project} />
          </Suspense>
        );
      })}
    </section>
  );
};

export default Projects;
