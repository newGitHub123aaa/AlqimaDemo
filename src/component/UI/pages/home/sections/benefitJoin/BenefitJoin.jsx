import React from "react";
import BenefitItem from "./units/BenefitItem";
import { connect } from "react-redux";

// import benefit imgs
import benefitImg1 from "../../../../../../assets/icons/benefit3.svg"; // replace by benefit1 when get it
import benefitImg2 from "../../../../../../assets/icons/benefit2.svg";
import benefitImg3 from "../../../../../../assets/icons/benefit3.svg";
import benefitImg4 from "../../../../../../assets/icons/benefit4.svg";
import benefitImg5 from "../../../../../../assets/images/benefit5.png";
import WaveTop from "./../../../../../common/WaveTop";
import WaveBottom from './../../../../../common/WaveBottom';

function BenefitJoin({ benefitJoin }) {
  return (
    <section className="benefit-join">
      <WaveTop />
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
      <WaveBottom />
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    benefitJoin: state.dataText.dataJson.home.benefitJoin,
  };
};

export default connect(mapStateToProps)(BenefitJoin);
