import React from "react";
import GithubIcon from "../images/github.svg";
import TwitterIcon from "../images/twitter.svg";
import LinkedinIcon from "../images/linkedin.svg";
import "../styles/routes/ContactMe.scss";

const ContactMe = () => {
  return (
    <section className="ContactMe">
      <h2>Contact me</h2>
      <p>
        You can contact me for those mediums, I would delighted to talk with you
      </p>
      <article>
        <img src={GithubIcon} alt="Quarzizus Miguel Vásquez" />
        <h4>
          <a href="https://github.com/Quarzizus" target="_blank">
            Quarzizus
          </a>
        </h4>
      </article>
      <article>
        <img src={TwitterIcon} alt="Quarzizus Miguel Vásquez" />
        <h4>
          <a href="https://twitter.com/quarzizus" target="_blank">
            @Quarzizus
          </a>
        </h4>
      </article>
      <article>
        <img src={LinkedinIcon} alt="Quarzizus Miguel Vásquez" />
        <h4>
          <a
            href="https://www.linkedin.com/in/miguel-angel-v%C3%A1squez-correa-6957251a5/"
            target="_blank"
          >
            Miguel Vásquez
          </a>
        </h4>
      </article>
    </section>
  );
};

export default ContactMe;
