import "./styles.scss";
import Casatoro from "../../../../images/Casatoro.jpg";
import { Tasks } from "../Tasks";
import { Results } from "../Results";
import { Skills } from "../Skills";

const ProjectExperience = () => {
  return (
    <article className="ProjectExperience">
      <div className="header">
        <picture>
          <img src={Casatoro} alt="CasaToro" />
        </picture>
        <h3 className="title">CasaToro Automotriz</h3>
      </div>
      <section className="main">
        <p className="jobtitle">Desarrollador Frontend</p>
        <p>abr. 2022 - jun. 2024 · 2 años 3 meses</p>
        <p>Medellín, Antioquia, Colombia · En remoto</p>
      </section>
      <Tasks />
      <Results />
      <Skills />
    </article>
  );
};

export { ProjectExperience };
