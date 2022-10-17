import React from "react";
import CoButton from "./../../../../../common/CoButton";
import { connect } from "react-redux";

// import landing images
import landingImg1 from "../../../../../../assets/images/HomeLandingImages/landing1.png";
import landingImg2 from "../../../../../../assets/images/HomeLandingImages/landing2.png";
import landingImg3 from "../../../../../../assets/images/HomeLandingImages/landing3.png";
import landingImg4 from "../../../../../../assets/images/HomeLandingImages/landing4.png";
import WaveLanding from "../../../../../common/WaveLanding";

function Landing({ landing }) {
  return (
    <section className="homeLanding landingSections">
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
              path={"signup"}
              contentText={landing.buttonGroup.signUpNow}
            />
          </div>
        </div>
        <div className="banner-container">
          <div className="bullets-item"></div>
          <div className="bullets-item"></div>
          <div className="bullets-item"></div>
          <div className="bullets-item"></div>
          <div className="bullets-item"></div>
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
      </div>
      <WaveLanding />
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    landing: state.dataText.dataJson.home.landing,
  };
};

export default connect(mapStateToProps)(Landing);
