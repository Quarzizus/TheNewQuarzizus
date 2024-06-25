import "./styles.scss";

const SocialMedia = ({ url, name, icon }) => {
  return (
    <a className="SocialMedia" href={url} target="_blank" rel="noopener">
      <article>
        <img src={icon} alt={name} />
        <h4>{name}</h4>
      </article>
    </a>
  );
};
export { SocialMedia };
