import React from "react";
import { connect } from "react-redux";

// import learning image
import AppImg1 from "../../../../../../assets/images/appImg1.png";
import AppImg2 from "../../../../../../assets/images/appImg2.png";
// import store App and google play app images
import AppStoreImg from "../../../../../../assets/icons/App Store.svg";
import GooglePlayImg from "../../../../../../assets/icons/Google Play.svg";
import WaveTop from "./../../../../../common/WaveTop";
import WaveBottom from "../../../../../common/WaveBottom";

function GetApp({ getApp }) {
  return (
    <section className="get-app">
      <WaveTop />
      <div className="container pattern">
        <div className="getApp-left">
          <div className="image-hand-one">
            <img
              className="getApp-img"
              src={AppImg2}
              alt={getApp.getAppImgAlt2}
            />
            <div className="image-hand-two">
              <img
                className="getApp-img"
                src={AppImg1}
                alt={getApp.getAppImgAlt1}
              />
            </div>
          </div>
        </div>
        <div className="getApp-right">
          <h2 className="learn-header">{getApp.learnHeader}</h2>
          <p className="getApp-paragraph">{getApp.getAppParagraph}</p>
          <div className="get-app">
            <img src={AppStoreImg} alt={getApp.downloadAppAlt1} />
            <img src={GooglePlayImg} alt={getApp.downloadAppAlt12} />
          </div>
        </div>
      </div>
      <WaveBottom />
    </section>
  );
}
const mapStateToProps = (state) => {
  return {
    getApp: state.dataText.dataJson.home.getApp,
  };
};

export default connect(mapStateToProps)(GetApp);
