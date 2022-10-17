import React from "react";
import { connect } from "react-redux";
import WaveLanding from "../../../../../common/WaveLanding";

// import Contacts images
import landingContactImg from "../../../../../../assets/images/contactsLanding.png";
function ContactLanding({ contactLanding }) {
  return (
    <section className="landingSections contactsLanding">
      <div className="container">
        <div className="content-box">
          <h1 className="main-header">{contactLanding.header}</h1>
        </div>
        <div className=" contact-landing-img">
          <img src={landingContactImg} alt="contacts us"></img>
        </div>
        <div className="bullets-item"></div>
        <div className="bullets-item"></div>
        <div className="bullets-item"></div>
        <div className="bullets-item"></div>
        <div className="bullets-item"></div>
      </div>
      <WaveLanding />
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    contactLanding: state.dataText.dataJson.contactsPage.contactLanding,
  };
};

export default connect(mapStateToProps)(ContactLanding);
