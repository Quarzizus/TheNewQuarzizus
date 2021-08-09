import React from "react";
import "../styles/routes/AboutMe.scss";
import Perfil from "../images/Perfil.webp";

const AboutMe = () => {
  return (
    <section className="AboutMe">
      <h2>
        Welcome !<br /> I am <span>Miguel Vásquez</span>
      </h2>
      <picture>
        <img src={Perfil} alt="Quarzizus Miguel Vásquez" />
      </picture>
      <p>
        I am frontend developer passionate for the technology and education.
        Thus is ! also I love to learn about education and somes others subject.
        I tell you ? Lets begin !
      </p>
      <ul>
        <li>To tell short histories</li>
        <li>To play piano</li>
        <li>To compose music</li>
      </ul>
      <p>
        I am currently learning React.js, Redux and Firebase. In my repositories
        books you would see my progress.
      </p>
    </section>
  );
};

export default AboutMe;
