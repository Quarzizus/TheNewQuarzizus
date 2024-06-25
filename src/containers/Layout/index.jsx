import "./styles.scss";
import Header from "../../components/Header";
import Navigator from "../../components/Navigator";
import Main from "../Main";
import Sections from "../Sections";

const Layout = ({ children }) => {
  return (
    <section className="App">
      <Header />
      <Main>
        <Navigator />
        <Sections>{children}</Sections>
      </Main>
    </section>
  );
};

export default Layout;
