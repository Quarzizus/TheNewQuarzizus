import "./styles.scss";

const Header = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return (
    <header className="Header">
      <article className="Header_aside-left">
        "Mejor un poco todos los días que mucho de vez en cuando"
      </article>
      <h1 className="Header_title">Quarzizus</h1>
      <article className="Header_aside-right">{`${day}/${month}/${year}`}</article>
    </header>
  );
};

export default Header;
