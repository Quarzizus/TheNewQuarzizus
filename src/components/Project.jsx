import React from "react";
import "../styles/components/Project.scss";

const Project = ({ img, title, description, repo, page }) => {
  return (
    <article className="Project">
      <h3 className="Project_title">{title}</h3>
      <picture>
        <img src={img} alt="Quarzizus Miguel Vásquez" />
      </picture>
      <p>{description}</p>
      <section className="Project_buttons">
        <a href={repo} target="_blank" rel="noopener">
          <button className="button_repo">Repo</button>
        </a>
        <a href={page} target="_blank" rel="noopener">
          <button className="button_page">Page</button>
        </a>
      </section>
    </article>
  );
};

export default Project;
