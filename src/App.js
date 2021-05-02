import "./App.css";
import LegalNotice from "./components/legalNotice/LegalNotice";
import Main from "./containers/Main";
import React from "react";
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
      <Switch>
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/legal-notice" component={LegalNotice} />
      </Switch>
    </Router>
  );
}

export default App;
