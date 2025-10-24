import { Suspense } from "react";
import Loader from "../../components/Loader";
import "./styles.scss";
import { ProjectExperience } from "./atoms/ProjectExperience";
import { experiencias } from "../../context/experiencia";

const Experiencia = () => {
  return (
    <section className="Experiencia">
      <h2>Experiencia</h2>
      <section className="container">
        <Suspense fallback={<Loader />}>
          {experiencias.map((experience, index) => (
            <>
              <ProjectExperience key={experience.id} experience={experience} />
              {index < experiencias.length - 1 && (
                <div className="separator"></div>
              )}
            </>
          ))}
        </Suspense>
      </section>
    </section>
  );
};

export { Experiencia };
