import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./TermsAndConditions.css";
import TermsAndConditionsText from "./TermsAndConditionsText";
import React, {Component} from "react";
import {StyleProvider} from "../../contexts/StyleContext";
import Top from "../../containers/topbutton/Top";

export default class TermsAndConditions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false
    };
  }

  componentDidMount() {
    if (localStorage.getItem("isDark") === null) {
      const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
      localStorage.setItem("isDark", darkPref.matches);
    }
    this.setState({isDark: JSON.parse(localStorage.getItem("isDark"))});
  }
  changeTheme = () => {
    this.setState({isDark: !this.state.isDark}, () => {
      localStorage.setItem("isDark", this.state.isDark);
    });
  };

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{isDark: this.state.isDark, changeTheme: this.changeTheme}}
        >
          <Header />
          <TermsAndConditionsText />
          <Footer />
          <Top />
        </StyleProvider>
      </div>
    );
  }
}
