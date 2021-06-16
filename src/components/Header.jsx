import React from "react";
import "../styles/components/Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <article className="Header_aside-left">
        "Fracasa otra vez, fracasa mejor"
      </article>
      <h1 className="Header_title">The New Quarzizus Day</h1>
      <article className="Header_aside-right">&copy; Miguel Vásquez</article>
    </header>
  );
};

export default Header;
