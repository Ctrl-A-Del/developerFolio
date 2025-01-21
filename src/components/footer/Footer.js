import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import {Link} from "react-router-dom";  

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          <Link to="/legal-notice">Legal Notice</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms-and-conditions">Terms and Conditions</Link>
        </p>
      </div>
    </Fade>
  );
}
