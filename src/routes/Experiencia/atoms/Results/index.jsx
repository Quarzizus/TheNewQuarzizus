import "./styles.scss";
import { Items } from "./items";

const Results = () => {
  return (
    <section className="Results">
      <p className="title">Resultados</p>
      <div className="container">
        {Items.map((item) => (
          <a className="item" id={item.id} target="_blank" href={item.url}>
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
