import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import OpinionsPerson from "./units/OpinionsPerson";

// import OpinionsPerson images
import opinionImg1 from "../../../../../../assets/images/opinions1.png";
import opinionImg2 from "../../../../../../assets/images/opinions2.png";

function OpinionsUsers({ opinionsUsers }) {
  const [opinionsImgs,setOpinionsImgs] = useState([opinionImg1, opinionImg2, opinionImg1]);
  const [activeNum, setActiveNum] = useState(0);

  useEffect(() => {
    let activeNumClone = activeNum;
    let numInterval = setInterval(() => {
      document.getElementsByTagName("html")[0].getAttribute("dir") === 'rtl' ? setOpinionsImgs(opinionsImgs.reverse()) : setOpinionsImgs(opinionsImgs) ;
      if (activeNumClone < opinionsUsers.opinionsPersons.length - 1) {
        activeNumClone++;
        setActiveNum(activeNumClone);
      } else if (activeNumClone === opinionsUsers.opinionsPersons.length - 1) {
        activeNumClone = 0;
        setActiveNum(activeNumClone);
      }
    }, 2500);
    return () => {
      clearInterval(numInterval);
    };
  }, []);

  return (
    <section className="opinions-users">
      <div className="container">
        <div className="opinions-users-top">
          <h2 className="opinions-users-header">
            {opinionsUsers.opinionsUsersHeader}
          </h2>
          <p className="opinions-users-paragraph">
            {opinionsUsers.opinionsUsersParagraph}
          </p>
        </div>
        <div className="opinions-persons-box">
          {opinionsUsers.opinionsPersons.map((el, inx) =>
            activeNum === inx ? (
              <OpinionsPerson
                key={inx + el.id}
                className={el.id}
                quoteParagraph={el.quoteParagraph}
                personImg={opinionsImgs[inx]}
                personName={el.personName}
                personCareer={el.personCareer}
              />
            ) : (
              ""
            )
          )}
          <div className="person-ballets">
            {opinionsUsers.opinionsPersons.map((el, inx) => (
              <span
                key={inx + el.id}
                className={activeNum === inx ? "active" : ""}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    opinionsUsers: state.dataText.dataJson.home.opinionsUsers,
  };
};

export default connect(mapStateToProps)(OpinionsUsers);
