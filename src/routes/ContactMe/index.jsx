import { SocialMedia } from "./atoms/SocialMedia";
import { Items } from "./items";
import "./styles.scss";

const ContactMe = () => {
  return (
    <section className="ContactMe">
      <h2>Contáctame</h2>
      <p>
        Puedes contactarme por los siguientes medios. Estaré encantado de
        conversar contigo.
      </p>
      {Items.map((item) => (
        <SocialMedia key={item.id} {...item} />
      ))}
    </section>
  );
};

export default ContactMe;
