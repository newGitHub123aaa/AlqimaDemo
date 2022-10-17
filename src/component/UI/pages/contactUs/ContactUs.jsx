import React from "react";
import ContactLanding from "./sections/contactLanding/ContactLanding";
import ContactItems from "./sections/contactItems/ContactItems";
import ContactForm from "./sections/contactForm/ContactForm";
import { connect } from "react-redux";
import { DocumentMeta } from "react-document-meta";

function ContactUs(meta) {
  return (
    <DocumentMeta {...meta}>
      <div className="contact-page">
        <ContactLanding />
        <ContactItems />
        <ContactForm />
      </div>
    </DocumentMeta>
  );
}
const mapStateToProps = (state) => {
  return {
    meta: state.dataText.dataJson.coursesPage.meta,
  };
};

export default connect(mapStateToProps)(ContactUs);
