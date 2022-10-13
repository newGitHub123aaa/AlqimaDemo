import React from "react";
import Landing from "./sections/landing/Landing";
import Statistics from "./sections/statistics/Statistics";
import BenefitJoin from "./sections/benefitJoin/BenefitJoin";
import OpinionsUsers from './sections/opinionsUsers/OpinionsUsers';

function Home() {
  return (
    <div className="home">
      <Landing />
      <Statistics />
      <BenefitJoin />
      <OpinionsUsers />
    </div>
  );
}

export default Home;
