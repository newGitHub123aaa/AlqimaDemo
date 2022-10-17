import React, { useState } from "react";
import { connect } from "react-redux";
import { changeData, changeLang } from "../../../redux";
import { NavLink, useNavigate } from "react-router-dom";
// import CoButton from "./../../common/CoButton";
// import logoImg
import logoImg from "../../../assets/images/logo/logo1.png";

function NavLinks({ lang, dir, changeLang, changeData, navLink }) {
  const navigate = useNavigate();
  // methods
  const handleBtnLang = () => {
    const language = lang === "en" ? "ar" : "en";
    const direction = dir === "ltr" ? "rtl" : "ltr";
    changeLang(language, direction);
    handleLang(language, direction);
    changeData(language);
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
  const [pagesPaths] = useState(["home", "teachers/all", "courses/all", "contactus"]);
  // const [loginPaths] = useState(["login", "signup"]);

  const handleSignGo = (path) => {
    navigate(`/${path}`);
  };

  return (
    <>
      <nav className="nav-links">
        <div className="container">
          <div className="nav-box">
            <div
              className="logo-box clickable"
              onClick={() => handleSignGo("home")}
            >
              <div className="logo-img">
                <img src={logoImg} alt="" />
              </div>
              <span className="span-logo span-logo-light">
                {navLink.logoBox.logoSpan}
              </span>
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
                <button className="change-lang" onClick={handleBtnLang}>
                  {navLink.lang}
                </button>
              </ul>
            </div>
            <div className="sign-box">
              <a className="navDownloadApp" href="#">
                {navLink.downloadBtn}
              </a>
            </div>
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
    changeData: (language) => dispatch(changeData(language)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavLinks);
