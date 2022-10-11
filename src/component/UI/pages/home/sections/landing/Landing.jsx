import React from "react";
import CoButton from "./../../../../../common/CoButton";
import landingImg from "../../../../../../assets/images/landing.png";
import { connect } from "react-redux";
function Landing({ landing }) {
  return (
    <section className="landing">
      <div className="container">
        <div className="content-box">
          <h1 className="main-header">
            <span className="odd-word">{landing.mainHeader.oddWord}</span>
            &thinsp;{landing.mainHeader.restHeader}
          </h1>
          <p className="landing-description">{landing.description}</p>
          <div className="button-group-landing">
            <CoButton
              className={"get-started"}
              goto={"#"}
              contentText={landing.buttonGroup.getStarted}
            />
            <button className="landing-sign-up">
              {landing.buttonGroup.signUp}
            </button>
          </div>
        </div>
        <div className="banner-box">
          <img src={landingImg} alt={landing.bannerImgAlt} />
        </div>
      </div>
      <div
        style={{ height: 150, overflow: "hidden", backgroundColor: "white" }}
      >
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,49.99 C250.93,10.10 343.44,211.08 504.68,52.09 L500.00,0.00 L0.00,0.00 Z"
            style={{ stroke: "none", fill: "rgb(48, 51, 106)" }}
          />
        </svg>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    landing: state.dataText.dataJson.home.landing,
  };
};

export default connect(mapStateToProps)(Landing);

