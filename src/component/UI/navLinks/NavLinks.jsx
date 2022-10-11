import React, { useState } from "react";
import { connect } from "react-redux";
import { changeLang } from "../../../redux";
import logoImg from "../../../assets/images/logo/logo1.png";
import { NavLink, useNavigate } from "react-router-dom";
import CoButton from "./../../common/CoButton";

function NavLinks({ lang, dir, changeLang, navLink }) {
  const navigate = useNavigate();
  // methods
  const handleBtnLang = () => {
    const language = lang === "en" ? "ar" : "en";
    const direction = dir === "ltr" ? "rtl" : "ltr";
    changeLang(language, direction);
    handleLang(language, direction);
  };
  const handleLang = (language, direction) => {
    if (language === "en" && direction === "ltr") {
      document.getElementsByTagName("html")[0].setAttribute("lang", "en");
      document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
    } else {
      document.getElementsByTagName("html")[0].setAttribute("lang", "ar");
      document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
    }
  };
  const [pagesPaths] = useState(["home", "teachers", "subjects", "about"]);
  const [loginPaths] = useState(["login", "signup"]);

  const handleSignGo = (path) => {
    navigate(`/${path}`);
  };

  return (
    <>
      <nav className="nav-links">
        <div className="container">
          <button className="change-lang" onClick={handleBtnLang}>
            {navLink.lang}
          </button>
          <div className="logo-box">
            <div className="logo-img">
              <img src={logoImg} alt="" />
            </div>
            <span>{navLink.logoBox.logoSpan}</span>
          </div>
          <div className="list-box">
            <ul className="list-ul">
              {navLink.navList.map((el, inx) => (
                <NavLink
                  className="list-item"
                  to={"/" + pagesPaths[inx]}
                  key={inx + el}
                >
                  <li className="list-item" key={inx}>
                    {el}
                  </li>
                </NavLink>
              ))}
            </ul>
          </div>
          <div className="sign-box">
            <button
              className="login"
              onClick={() => handleSignGo(loginPaths[0])}
            >
              {navLink.sign.login}
            </button>
            <CoButton className={"sign-up"} goto={loginPaths[1]} contentText={navLink.sign.signUp}/>
          </div>
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    lang: state.langDir.lang,
    dir: state.langDir.dir,
    navLink: state.dataText.dataJson.navLink,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLang: (language, direction) =>
      dispatch(changeLang(language, direction)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavLinks);
