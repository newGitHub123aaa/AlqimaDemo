import React from "react";
import { connect } from "react-redux";
import OpinionsPerson from "./units/OpinionsPerson";

// import OpinionsPerson images
import opinionImg1 from "../../../../../../assets/images/opinions1.png";

function OpinionsUsers({ opinionsUsers }) {
  const opinionsImgs = [opinionImg1];
  // const [opinionsImgs] = useState([opinionImg1]);
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
          {opinionsUsers.opinionsPersons.map((el, inx) => (
            <OpinionsPerson
              key={inx + el.id}
              className={el.id}
              quoteParagraph={el.quoteParagraph}
              personImg={opinionsImgs[inx]}
              personName={el.personName}
              personCareer={el.personCareer}
            />
          ))}
          <div className="person-ballets">
            <span></span>
            <span className="active"></span>
            <span></span>
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
