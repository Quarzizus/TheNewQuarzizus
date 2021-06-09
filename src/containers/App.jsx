import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import AboutMe from "../routes/AboutMe";
import Projects from "../routes/Projects";
import ContactMe from "../routes/ContactMe";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contactme" component={ContactMe} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
