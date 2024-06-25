import { Suspense } from "react";
import Loader from "../../components/Loader";
import "./styles.scss";
import { ProjectExperience } from "./atoms/ProjectExperience";

const Experiencia = () => {
  return (
    <section className="Experiencia">
      <h2>Experiencia</h2>
      <Suspense fallback={<Loader />}>
        <ProjectExperience />
      </Suspense>
    </section>
  );
};

export { Experiencia };
