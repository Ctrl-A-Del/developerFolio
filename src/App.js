import "./App.css";
import LegalNotice from "./components/legalNotice/LegalNotice";
import Main from "./containers/Main";
import Privacy from "./components/privacy/Privacy";
import React from "react";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function Portfolio() {
  return (
    <div>
      <Main />
    </div>
  );
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Portfolio} />
        <Route path="/legal-notice" component={LegalNotice} />
        <Route path="/privacy" component={Privacy} />
      </Switch>
    </Router>
  );
}

export default App;
