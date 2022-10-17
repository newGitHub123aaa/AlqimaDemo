import React from "react";
import Landing from "./sections/landing/Landing";
import Statistics from "./sections/statistics/Statistics";
import BenefitJoin from "./sections/benefitJoin/BenefitJoin";
import OpinionsUsers from "./sections/opinionsUsers/OpinionsUsers";
import Learning from "./sections/learning/Learning";
import GetApp from "./sections/getApp/GetApp";
import { connect } from "react-redux";
import DocumentMeta from "react-document-meta";

function Home(meta) {
  return (
    <DocumentMeta {...meta}>
      <div className="home">
        <Landing />
        <Statistics />
        <BenefitJoin />
        <Learning />
        <GetApp />
        <OpinionsUsers />
      </div>
    </DocumentMeta>
  );
}

const mapStateToProps = (state) => {
  return {
    meta: state.dataText.dataJson.home.meta,
  };
};

export default connect(mapStateToProps)(Home);
