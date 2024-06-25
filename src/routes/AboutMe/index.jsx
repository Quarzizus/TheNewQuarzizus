import "./styles.scss";
import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";

const Perfil = lazy(() => import("../../components/Perfil"));

const AboutMe = () => {
  return (
    <section className="AboutMe">
      <h2>
        Hola
        <br /> Mi nombre es <span>Miguel Vásquez</span>
      </h2>
      <picture className="container">
        <Suspense fallback={<Loader />}>
          <Perfil />
        </Suspense>
      </picture>
      <p>
        Me gustan los puzzles, el funk, los gatos y las nubes.
        <br /> En mis ratos libres suelo tocar o componer música con mis amigos,
        escribir cuentos, ver peliculas.
      </p>
      <p>
        Profesionalmente, me desempeño como desarrollador frontend desde hace
        dos años. Aquí puedes conocer un poco de mi{" "}
        <Link to={"/experiencia"} className="Link">
          experiencia
        </Link>
        .
      </p>
    </section>
  );
};

export default AboutMe;
