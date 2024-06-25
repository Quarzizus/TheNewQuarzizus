import GithubIcon from "../../images/github.svg";
import TwitterIcon from "../../images/twitter.svg";
import LinkedinIcon from "../../images/linkedin.svg";
import PlatziIcon from "../../images/platzi.png";
import "./styles.scss";

const ContactMe = () => {
  return (
    <section className="ContactMe">
      <h2>Contáctame</h2>
      <p>
        Puedes contactarme por los siguientes medios. Estaré encantado de
        conversar contigo.
      </p>
      <article>
        <img src={GithubIcon} alt="Quarzizus Miguel Vásquez" />
        <h4>
          <a href="https://github.com/Quarzizus" target="_blank" rel="noopener">
            Quarzizus
          </a>
        </h4>
      </article>
      <article>
        <img src={TwitterIcon} alt="Quarzizus Miguel Vásquez" />
        <h4>
          <a
            href="https://twitter.com/quarzizus"
            target="_blank"
            rel="noopener"
          >
            @Quarzizus
          </a>
        </h4>
      </article>
      <article>
        <img src={LinkedinIcon} alt="Quarzizus Miguel Vásquez" />
        <h4>
          <a
            href="https://www.linkedin.com/in/miguel-vasquez-correa/"
            target="_blank"
            rel="noopener"
          >
            Miguel Vásquez
          </a>
        </h4>
      </article>
      <article>
        <img src={PlatziIcon} alt="Quarzizus Miguel Vásquez" />
        <h4>
          <a
            href="https://platzi.com/p/quarzizus/"
            target="_blank"
            rel="noopener"
          >
            Miguel Vásquez
          </a>
        </h4>
      </article>
    </section>
  );
};

export default ContactMe;
