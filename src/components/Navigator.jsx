import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Navigator.scss";

const Navigator = () => {
  const handleOpen = () => {
    const navigatorActive = document.querySelector(".Navigator-active");
    const navigator = document.querySelector(".Navigator");
    if (navigator.classList.contains("Block")) {
      navigator.classList.replace("Block", "None");
      navigatorActive.classList.replace("None", "Block");
    }
  };
  const handleClose = () => {
    const navigatorActive = document.querySelector(".Navigator-active");
    const navigator = document.querySelector(".Navigator");
    if (navigatorActive.classList.contains("Block")) {
      navigatorActive.classList.replace("Block", "None");
      navigator.classList.replace("None", "Block");
    }
  };
  return (
    <>
      <button className="Navigator Block" onClick={handleOpen} title="Menu">
        Z
      </button>
      <nav className="Navigator-active None" onClick={handleClose}>
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
