import "./styles.scss";

const Project = ({ img, title, description, page }) => {
  return (
    <a className="Project" href={page} target="_blank" rel="noopener">
      <h3 className="Project_title">{title}</h3>
      <picture>
        <img src={img} alt="Quarzizus Miguel Vásquez" />
      </picture>
      <p>{description}</p>
    </a>
  );
};

export default Project;
