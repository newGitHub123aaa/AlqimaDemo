import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

// import  images
import logoImg from "../../../../../assets/images/logo/logo2.png";
import leftImg from "../../../../../assets/images/leftSignPage.png";
import googleLogo from "../../../../../assets/icons/GoogleLogo.webp";
function LoginSignUp({ signUpPage }) {
  const navigate = useNavigate();
  // state
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    checkbox: false,
    validate: false,
    errorMassages: {
      name: "",
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
  const handleGoLogin = () => {
    navigate(`/login`);
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
              <h2 className="sign-header">{signUpPage.signupSignHeader}</h2>
              <p className="sign-paragraph">{signUpPage.signupSignParagraph}</p>
            </div>
            <div className="sign-form">
              <form onSubmit={handleSubmit}>
                <div className="sign-box sign-name">
                  <label htmlFor="login-name">
                    {signUpPage.signupNameLabel}
                  </label>
                  <input
                    type="text"
                    id="login-name"
                    name="name"
                    placeholder={signUpPage.signupNamePlaceholder}
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="sign-box sign-email">
                  <label htmlFor="login-email">
                    {signUpPage.signupEmailLabel}
                  </label>
                  <input
                    type="email"
                    id="login-email"
                    name="email"
                    placeholder={signUpPage.signupEmailPlaceholder}
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="sign-box sign-password">
                  <label htmlFor="login-password">
                    {signUpPage.signupPasswordLabel}
                  </label>
                  <input
                    type="password"
                    id="login-password"
                    name="password"
                    placeholder={signUpPage.signupPasswordPlaceholder}
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
                      {signUpPage.signupRememberMe}
                    </label>
                  </div>
                </div>
                <button className="sign-btn">
                  {signUpPage.signupLoginBtn}
                </button>
                <button className="google-btn">
                  <img className="googleLogo" src={googleLogo} alt="" />
                  {signUpPage.signupGoogleBtn}
                </button>

                <p className="bottom-paragraph">
                  {signUpPage.signupBottomParagraph}&thinsp;
                  <button className="button-go-login" onClick={handleGoLogin}>
                    <span className="bottom-span">
                      {signUpPage.signupBottomSpan}
                    </span>
                  </button>
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
    signUpPage: state.dataText.dataJson.signUpPage,
  };
};

export default connect(mapStateToProps)(LoginSignUp);
