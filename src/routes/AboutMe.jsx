import React from "react";
import "../styles/routes/AboutMe.scss";
import Perfil from "../images/Perfil.png";

const AboutMe = () => {
  return (
    <section className="AboutMe">
      <h2>
        Welcome !<br /> I am <span>Miguel Vásquez</span>{" "}
      </h2>
      <picture>
        <img src={Perfil} alt="" />
      </picture>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, velit.
        At unde mollitia perspiciatis cumque, dicta laborum illo quam modi
        delectus vitae animi distinctio minima dolorem facilis quasi similique
        itaque.
      </p>
    </section>
  );
};

export default AboutMe;
