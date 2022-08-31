import "../styles/components/Header.scss";

const Header = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return (
    <header className="Header">
      <article className="Header_aside-left">
        "Fracasa otra vez, fracasa mejor"
      </article>
      <h1 className="Header_title">The New Quarzizus Day</h1>
      <article className="Header_aside-right">{`${day}/${month}/${year}`}</article>
    </header>
  );
};

export default Header;
