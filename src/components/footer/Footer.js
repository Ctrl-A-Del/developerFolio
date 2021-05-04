import React, {useContext} from "react";
import "./Footer.css";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {Link} from "react-router-dom";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        {/* <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by Saad Pasta")}
        </p> */}
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          <Link className="footer-link" to="/legal-notice">
            Legal Notice
          </Link>
          <Link className="footer-link" to="/privacy">
            Privacy
          </Link>
          <Link className="footer-link" to="/terms-and-conditions">
            Terms and Conditions
          </Link>
        </p>
      </div>
    </Fade>
  );
}
