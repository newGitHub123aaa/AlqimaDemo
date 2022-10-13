import React from "react";
import CoButton from "./../../../../../common/CoButton";
import { connect } from "react-redux";

// import landing images
import landingImg1 from "../../../../../../assets/images/HomelandingImages/landing1.png";
import landingImg2 from "../../../../../../assets/images/HomelandingImages/landing2.png";
import landingImg3 from "../../../../../../assets/images/HomelandingImages/landing3.png";
import landingImg4 from "../../../../../../assets/images/HomelandingImages/landing4.png";

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
              contentText={landing.buttonGroup.signUpNow}
            />
          </div>
        </div>
        <div className="banner-box">
          <div className="banner-item-container">
            <div className="banner-item banner-item-hand-img-one">
              <div className="hand-img">
                <img src={landingImg1} alt={landing.bannerImgAlt} />
              </div>
            </div>
          </div>
          <div className="banner-item-container">
            <div className="banner-item banner-item-hand-img-two">
              <div className="hand-img">
                <img src={landingImg2} alt={landing.bannerImgAlt} />
              </div>
            </div>
          </div>
          <div className="banner-item-container">
            <div className="banner-item banner-item-hand-img-three">
              <div className="hand-img">
                <img src={landingImg3} alt={landing.bannerImgAlt} />
              </div>
            </div>
          </div>
          <div className="banner-item-container">
            <div className="banner-item banner-item-hand-img-four">
              <div className="hand-img">
                <img src={landingImg4} alt={landing.bannerImgAlt} />
              </div>
            </div>
          </div>
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
