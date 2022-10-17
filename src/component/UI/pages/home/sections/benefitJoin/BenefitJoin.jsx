import React from "react";
import BenefitItem from "./units/BenefitItem";
import { connect } from "react-redux";

// import benefit imgs
import benefitImg1 from "../../../../../../assets/icons/benefit1.svg";
import benefitImg2 from "../../../../../../assets/icons/benefit2.svg";
import benefitImg3 from "../../../../../../assets/icons/benefit3.svg";
import benefitImg4 from "../../../../../../assets/icons/benefit4.svg";
import patternJoinImg from "../../../../../../assets/pattern/Pattern2.svg";

function BenefitJoin({ benefitJoin }) {
  return (
    <section className="benefit-join">
      <div className="container">
        <div className="bullets-item"></div>
        <div className="bullets-item"></div>
        <div className="bullets-item"></div>
        <div className="top-box">
          <h2 className="benefit-header">
            <div className="img-hand">
              <img className="pattern-join-img" src={patternJoinImg} alt="" />
            </div>
            {benefitJoin.benefitHeader}
          </h2>
          <p className="benefit-paragraph">{benefitJoin.benefitParagraph}</p>
        </div>
        <div className="bottom-box">
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
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    benefitJoin: state.dataText.dataJson.home.benefitJoin,
  };
};

export default connect(mapStateToProps)(BenefitJoin);
