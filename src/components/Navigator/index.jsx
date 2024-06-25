import { useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

const Navigator = () => {
  const navActiveRef = useRef();
  const navRef = useRef();

  const handleOpen = () => {
    const navActive = navActiveRef.current;
    const nav = navRef.current;
    if (nav.classList.contains("Block")) {
      nav.classList.replace("Block", "None");
      navActive.classList.replace("None", "Block");
    }
  };
  const handleClose = () => {
    const navActive = navActiveRef.current;
    const nav = navRef.current;
    if (navActive.classList.contains("Block")) {
      navActive.classList.replace("Block", "None");
      nav.classList.replace("None", "Block");
    }
  };
  return (
    <>
      <button
        className="Navigator Block"
        onClick={handleOpen}
        title="Menu"
        ref={navRef}
      >
        <FontAwesomeIcon
          className="Hambuguer_icon"
          icon={faBars}
          style={{ color: "white", fontSize: "14px" }}
        />
      </button>
      <nav
        className="Navigator-active None"
        onClick={handleClose}
        ref={navActiveRef}
      >
        <ul>
          <li>
            <Link to="/" className="Link">
              Un poco sobre mí
            </Link>
          </li>
          <li>
            <Link to="/experiencia" className="Link">
              Experiencia
            </Link>
          </li>
          <li>
            <Link to="/proyectos-personales" className="Link">
              Proyectos personales
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="Link">
              Contáctame
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigator;
