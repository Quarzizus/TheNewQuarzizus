import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import AboutMe from "../../routes/AboutMe";
import Projects from "../../routes/Projects";
import ContactMe from "../../routes/ContactMe";
import { NotFound } from "../../routes/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<AboutMe />} />
          <Route exact path="/proyectos-personales" element={<Projects />} />
          <Route exact path="/contacto" element={<ContactMe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
