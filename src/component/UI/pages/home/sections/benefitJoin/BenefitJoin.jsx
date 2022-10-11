import React from "react";
import BenefitItem from "./units/BenefitItem";
import { connect } from "react-redux";

// import benefit imgs
import benefitImg1 from "../../../../../../assets/images/benefit3.svg"; // replace by benefit1 when get it
import benefitImg2 from "../../../../../../assets/images/benefit2.svg";
import benefitImg3 from "../../../../../../assets/images/benefit3.svg";
import benefitImg4 from "../../../../../../assets/images/benefit4.svg";
import benefitImg5 from "../../../../../../assets/images/benefit5.png";

function BenefitJoin({ benefitJoin }) {
  return (
    <section className="benefit-join">
      <div
        className="sections-wave-svg-top"
        style={{ height: 150, overflow: "hidden", backgroundColor: "white" }}
      >
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,49.99 C250.93,10.10 343.44,211.08 504.68,52.09 L500.00,0.00 L0.00,0.00 Z"
            style={{ stroke: "none", fill: "#f7f8f9" }}
          />
        </svg>
      </div>
      <div className="container">
        <div className="top-box">
          <h2 className="benefit-header">{benefitJoin.benefitHeader}</h2>
          <p className="benefit-paragraph">{benefitJoin.benefitParagraph}</p>
        </div>
        <div className="bottom-box">
          <div className="bottom-left-box">
            <BenefitItem
              itemImg={benefitImg1}
              itemHeader={benefitJoin.benefitItems[0].itemHeader}
              itemParagraph={benefitJoin.benefitItems[0].itemParagraph}
            />
            <BenefitItem
              itemImg={benefitImg2}
              itemHeader={benefitJoin.benefitItems[1].itemHeader}
              itemParagraph={benefitJoin.benefitItems[1].itemParagraph}
            />
          </div>
          <div className="bottom-center-box">
            <div className="hand-img">
              <img src={benefitImg5} alt="" />
            </div>
          </div>
          <div className="bottom-right-box">
            <BenefitItem
              itemImg={benefitImg3}
              itemHeader={benefitJoin.benefitItems[2].itemHeader}
              itemParagraph={benefitJoin.benefitItems[2].itemParagraph}
            />
            <BenefitItem
              itemImg={benefitImg4}
              itemHeader={benefitJoin.benefitItems[3].itemHeader}
              itemParagraph={benefitJoin.benefitItems[3].itemParagraph}
            />
          </div>
        </div>
      </div>
      <div
        className="sections-wave-svg-bottom"
        style={{ height: 150, overflow: "hidden", backgroundColor: "#fff" }}
      >
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,49.99 C250.93,10.10 343.44,211.08 504.68,52.09 L500.00,0.00 L0.00,0.00 Z"
            style={{ stroke: "none", fill: "#f7f8f9" }}
          />
        </svg>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    benefitJoin: state.dataText.dataJson.home.benefitJoin,
  };
};

export default connect(mapStateToProps)(BenefitJoin);
