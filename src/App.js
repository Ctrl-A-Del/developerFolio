import "./App.scss";
import LegalNotice from "./components/legalNotice/LegalNotice";
import Main from "./containers/Main";
import Privacy from "./components/privacy/Privacy";
import React from "react";
import TermsAndConditions from "./components/termsAndConditions/TermsAndConditions";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";



function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Main></Main>} />
        <Route path="/legal-notice" element={<LegalNotice></LegalNotice>} />
        <Route path="/privacy" element={<Privacy></Privacy>} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions></TermsAndConditions>} />
      </Routes>
    </Router>
  );
}


export default App;
