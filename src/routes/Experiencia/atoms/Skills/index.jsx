import "./styles.scss";

const Skills = ({ skills }) => {
  if (!skills) return null;

  return (
    <section className="Skills">
      <p className="title">Herramientas</p>
      <p>{skills}</p>
    </section>
  );
};

export { Skills };
