import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

// import logoImg
import logoImg from "../../../assets/images/logo/logo2.png";
import AppStoreImg from "../../../assets/icons/App Store.svg";
import GooglePlayImg from "../../../assets/icons/Google Play.svg";

function Footer({ footer, navLink }) {
  const [pagesPaths] = useState([
    "home",
    "teachers/all",
    "courses/all",
    "contactus",
    "help",
    "privacy",
  ]);
  return (
    <footer className="footer pattern">
      <div className="container">
        <div className="footer-top">
          <div className="footer-top-left">
            <div className="logo-box">
              <div className="logo-img">
                <img src={logoImg} alt="" />
              </div>
              <span className="span-logo span-logo-dark">
                {navLink.logoBox.logoSpan}
              </span>
            </div>
            <div className="get-app">
              <a href="#">
                <img src={AppStoreImg} alt="App store img" />
              </a>
              <a href="#">
                <img src={GooglePlayImg} alt="Google play img" />
              </a>
            </div>
          </div>
          <div className="footer-top-right">
            <div className="list-box">
              <ul className="list-ul">
                {navLink.navList.map((el, inx) => (
                  <div key={inx + el}>
                    <NavLink className="list-item" to={"/" + pagesPaths[inx]}>
                      <li className="list-item" key={inx}>
                        {el}
                      </li>
                    </NavLink>
                  </div>
                ))}
                <NavLink className="list-item" to={"/" + pagesPaths[4]}>
                  <li>{footer.LinkHelp}</li>
                </NavLink>
                <NavLink className="list-item" to={"/" + pagesPaths[5]}>
                  <li>{footer.LinkPrivacy}</li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">{footer.copyRight}</div>
          <div className="footer-bottom-right">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const mapStateToProps = (state) => {
  return {
    footer: state.dataText.dataJson.home.footer,
    navLink: state.dataText.dataJson.navLink,
  };
};

export default connect(mapStateToProps)(Footer);
