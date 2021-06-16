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
        <button className="button_repo">
          <a href={repo} target="_blank" rel="noopener">
            Repo
          </a>
        </button>
        <button className="button_page">
          <a href={page} target="_blank" rel="noopener">
            Page
          </a>
        </button>
      </section>
    </article>
  );
};

export default Project;
