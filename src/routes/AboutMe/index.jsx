import "./styles.scss";
import Perfil from "../../images/Perfil.jpeg";

const AboutMe = () => {
  return (
    <section className="AboutMe">
      <h2>
        Hi !<br /> I am <span>Miguel Vásquez</span>
      </h2>
      <picture>
        <img src={Perfil} alt="Quarzizus Miguel Vásquez" />
      </picture>
      <p>
        I am frontend developer passionate for the technology, the music and the
        education. I tell you ? Lets begin !
      </p>
      <ul>
        <li>To tell short histories</li>
        <li>To play percussion</li>
      </ul>
      <p>
        I am currently learning Testing and Typescript to deep. In my
        repositories you would see my progress.
      </p>
    </section>
  );
};

export default AboutMe;
