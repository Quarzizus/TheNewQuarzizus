import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../containers/Layout";
import AboutMe from "../routes/AboutMe";
import Projects from "../routes/Projects";
import ContactMe from "../routes/ContactMe";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<AboutMe />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contactme" element={<ContactMe />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
