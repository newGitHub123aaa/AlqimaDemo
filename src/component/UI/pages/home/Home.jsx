import React from "react";
import Landing from "./sections/landing/Landing";
import Statistics from "./sections/statistics/Statistics";
import OurTeam from "./sections/ourTeam/OurTeam";
import BenefitJoin from "./sections/benefitJoin/BenefitJoin";
import OpinionsUsers from './sections/opinionsUsers/OpinionsUsers';
import Subscribe from './sections/subscribe/Subscribe';

function Home() {
  return (
    <div className="home">
      <Landing />
      <Statistics />
      <OurTeam />
      <BenefitJoin />
      <OpinionsUsers />
      <Subscribe />
    </div>
  );
}

export default Home;
