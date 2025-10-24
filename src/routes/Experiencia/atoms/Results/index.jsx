import "./styles.scss";

const Results = ({ results }) => {
  if (!results || results.length === 0) return null;

  return (
    <section className="Results">
      <p className="title">Resultados</p>
      <div className="container">
        {results.map((item) => (
          <a className="item" key={item.id} target="_blank" href={item.url}>
            <picture>
              <img src={item.image} alt={item.name} />
            </picture>
            <p>{item.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export { Results };
