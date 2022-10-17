import React, { useState } from "react";
import { connect } from "react-redux";

// import  images
import logoImg from "../../../../../assets/images/logo/logo2.png";
import leftImg from "../../../../../assets/images/leftSignPage.png";

function AllLogin({ loginPage }) {
  // state
  const [form, setForm] = useState({
    email: "",
    password: "",
    checkbox: false,
    validate: false,
    errorMassages: {
      email: "",
      password: "",
      checkbox: "",
    },
  });
  // methods
  const handleChange = (e) => {
    //   clone
    let formClone = { ...form };
    //   edit
    formClone[e.currentTarget.name] = e.currentTarget.value.trim();
    // form validate;
    if (formClone.email.trim() !== "") {
      formClone.errorMassages.email = "";
      formClone.validate = true;
      // setState
      setForm(formClone);
    } else {
      formClone.errorMassages.email = "! fill in the email field";
      formClone.validate = false;
      // setState
      setForm(formClone);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
  };
  return (
    <section className="login">
      <div className="sign">
        <div className="sign-left-container">
          <div className="sign-left">
            <div className="sign-left-top">
              <div className="hand-img">
                <img src={logoImg} alt="" />
              </div>
              <h2 className="sign-header">{loginPage.loginSignHeader}</h2>
              <p className="sign-paragraph">{loginPage.loginSignParagraph}</p>
            </div>
            <div className="sign-form">
              <form onSubmit={handleSubmit}>
                <div className="sign-box sign-email">
                  <label htmlFor="login-email">
                    {loginPage.loginEmailLabel}
                  </label>
                  <input
                    type="email"
                    id="login-email"
                    name="email"
                    placeholder={loginPage.loginEmailPlaceholder}
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="sign-box sign-password">
                  <label htmlFor="login-password">
                    {loginPage.loginPasswordLabel}
                  </label>
                  <input
                    type="password"
                    id="login-password"
                    name="password"
                    placeholder={loginPage.loginPasswordPlaceholder}
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="text-remember">
                  <div className="checkbox-box">
                    <input
                      type="checkbox"
                      id="login-checkbox"
                      name="checkbox"
                      value={form.checkbox}
                      onChange={handleChange}
                    />
                    <label htmlFor="login-checkbox">
                      {loginPage.loginRememberMe}
                    </label>
                  </div>
                  <span className="odd-words">
                    {loginPage.loginForgetPassword}
                  </span>
                </div>
                <button className="sign-btn">{loginPage.loginLoginBtn}</button>
                <p className="bottom-paragraph">
                  {loginPage.loginBottomParagraph}&thinsp;
                  <span className="bottom-span">
                    {loginPage.loginBottomSpan}
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="sign-right">
          <img src={leftImg} alt="" />
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    loginPage: state.dataText.dataJson.loginPage,
  };
};

export default connect(mapStateToProps)(AllLogin);
