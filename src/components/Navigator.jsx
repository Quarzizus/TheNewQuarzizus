import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/Navigator.scss";

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
              About Me
            </Link>
          </li>
          <li>
            <Link to="/projects" className="Link">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contactme" className="Link">
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigator;
