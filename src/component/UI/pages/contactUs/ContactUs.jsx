import React from "react";
import ContactLanding from "./sections/contactLanding/ContactLanding";
import ContactItems from "./sections/contactItems/ContactItems";
import ContactForm from "./sections/contactForm/ContactForm";
import { connect } from "react-redux";
import DocumentMeta from "react-document-meta";

function ContactUs({ metaContactUs }) {
  return (
    <DocumentMeta {...metaContactUs}>
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
    metaContactUs: state.dataText.dataJson.contactsPage.meta,
  };
};

export default connect(mapStateToProps)(ContactUs);
