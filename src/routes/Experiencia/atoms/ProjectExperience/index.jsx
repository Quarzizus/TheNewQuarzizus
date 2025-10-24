import "./styles.scss";
import { Tasks } from "../Tasks";
import { Results } from "../Results";
import { Skills } from "../Skills";

const ProjectExperience = ({ experience }) => {
  const { company, jobTitle, period, location, tasks, results, skills } =
    experience;

  return (
    <article className="ProjectExperience">
      <div className="header">
        {company.logo && (
          <picture>
            <img src={company.logo} alt={company.name} />
          </picture>
        )}
        <h3 className="title">{company.name}</h3>
      </div>
      <section className="main">
        <p className="jobtitle">{jobTitle}</p>
        <p>{period}</p>
        <p>{location}</p>
      </section>
      <Tasks tasks={tasks} />
      <Results results={results} />
      <Skills skills={skills} />
    </article>
  );
};

export { ProjectExperience };
