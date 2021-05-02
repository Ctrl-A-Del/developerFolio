import "./App.css";
import LegalNotice from "./components/legalNotice/LegalNotice";
import Main from "./containers/Main";
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

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
        </Switch>
    </Router>
  );
}

export default App;
