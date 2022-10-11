import React, { useEffect } from "react";
import CoButton from "./../../../../../common/CoButton";
import { connect } from "react-redux";
import Cards from "./units/Cards";
// import Cards images
import cardImg1 from "../../../../../../assets/images/Card1.jpg";
import cardImg2 from "../../../../../../assets/images/Card2.jpg";
import cardImg3 from "../../../../../../assets/images/Card3.jpg";
import cardImg4 from "../../../../../../assets/images/Card4.jpg";
import cardImg5 from "../../../../../../assets/images/Card5.jpg";
import cardImg6 from "../../../../../../assets/images/Card6.jpg";

function OurTeam({ ourTeam }) {
  return (
    <section className="our-team">
      <div className="our-team-box">
        <div className="container">
          <div className="content-box">
            <div className="text-box">
              <h2 className="team-header">
                {ourTeam.contentBox.textBox.teamHeader}
              </h2>
              <p className="team-paragraph">
                {ourTeam.contentBox.textBox.teamParagraph}
              </p>
            </div>
            <div className="team-button">
              <CoButton
                className={"team-btn"}
                goto={"#"}
                contentText={ourTeam.contentBox.teamButton}
              />
            </div>
          </div>
          <div className="cards-box">
            <div className="cards-box-top">
              <div className="cards-box-top-left">
                <Cards
                  className={"bigCard"}
                  imgCard={cardImg1}
                  headerCard={ourTeam.cardsBox.cardsBoxItems[0].headerCard}
                  paragraphCard={
                    ourTeam.cardsBox.cardsBoxItems[0].paragraphCard
                  }
                />
              </div>
              <div className="cards-box-top-right">
                <Cards
                  className={"smallCard"}
                  imgCard={cardImg2}
                  headerCard={ourTeam.cardsBox.cardsBoxItems[1].headerCard}
                  paragraphCard={
                    ourTeam.cardsBox.cardsBoxItems[1].paragraphCard
                  }
                />
                <Cards
                  className={"smallCard"}
                  imgCard={cardImg3}
                  headerCard={ourTeam.cardsBox.cardsBoxItems[2].headerCard}
                  paragraphCard={
                    ourTeam.cardsBox.cardsBoxItems[2].paragraphCard
                  }
                />
              </div>
            </div>
            <div className="cards-box-bottom">
              <div className="cards-box-bottom-left">
                <Cards
                  className={"smallCard"}
                  imgCard={cardImg4}
                  headerCard={ourTeam.cardsBox.cardsBoxItems[3].headerCard}
                  paragraphCard={
                    ourTeam.cardsBox.cardsBoxItems[3].paragraphCard
                  }
                />
                <Cards
                  className={"smallCard"}
                  imgCard={cardImg5}
                  headerCard={ourTeam.cardsBox.cardsBoxItems[4].headerCard}
                  paragraphCard={
                    ourTeam.cardsBox.cardsBoxItems[4].paragraphCard
                  }
                />
              </div>
              <div className="cards-box-bottom-right">
                <Cards
                  className={"bigCard"}
                  imgCard={cardImg6}
                  headerCard={ourTeam.cardsBox.cardsBoxItems[5].headerCard}
                  paragraphCard={
                    ourTeam.cardsBox.cardsBoxItems[5].paragraphCard
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    ourTeam: state.dataText.dataJson.home.ourTeam,
  };
};

export default connect(mapStateToProps)(OurTeam);
