import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Navigator.scss";

const Navigator = () => {
  return (
    <nav className="Navigator">
      <ul>
        <li>
          <Link to="/" className="Link">
            About Me
          </Link>{" "}
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
  );
};

export default Navigator;
