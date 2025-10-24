import "./styles.scss";

const Tasks = ({ tasks }) => {
  if (!tasks || tasks.length === 0) return null;

  return (
    <section className="Tasks">
      <p className="title">Tareas</p>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </section>
  );
};

export { Tasks };
