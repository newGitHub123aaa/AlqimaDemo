import React, { useState } from "react";
import { connect } from "react-redux";

function ContactForm({ contactForm }) {
  // state
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    checkbox: false,
    validate: false,
    errorMassages: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // methods
  const handleChange = (e) => {
    //   clone
    let contactFormDataClone = { ...contactFormData };
    //   edit
    contactFormDataClone[e.currentTarget.name] = e.currentTarget.value.trim();
    // form validate;
    if (contactFormDataClone.email.trim() !== "") {
      contactFormDataClone.errorMassages.email = "";
      contactFormDataClone.validate = true;
      // setState
      setContactFormData(contactFormDataClone);
    } else {
      contactFormDataClone.errorMassages.email = "! fill in the email field";
      contactFormDataClone.validate = false;
      // setState
      setContactFormData(contactFormDataClone);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
  };
  return (
    <section className="contact-form">
      <div className="container">
        <h3>{contactForm.fromHeader}</h3>
        <div className="form-box">
          <form onSubmit={handleSubmit}>
            <div className="contact-left">
              <div className="contact-name-input">
                <input
                  type="text"
                  id="contact-name-input"
                  name="name"
                  placeholder={contactForm.fromPlaceholder.name}
                  value={contactFormData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-email-input">
                <input
                  type="email"
                  id="contact-email-input"
                  name="email"
                  placeholder={contactForm.fromPlaceholder.email}
                  value={contactFormData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-subject-input">
                <input
                  type="text"
                  id="contact-subject-input"
                  name="subject"
                  placeholder={contactForm.fromPlaceholder.subject}
                  value={contactFormData.subject}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="contact-right">
              <div className="contact-message">
                <textarea
                  id="contact-subject-input"
                  name="message"
                  placeholder={contactForm.fromPlaceholder.message}
                  value={contactFormData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </form>
        </div>
        <button className="contact-form-btn">{contactForm.fromBtn}</button>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    contactForm: state.dataText.dataJson.contactsPage.contactForm,
  };
};

export default connect(mapStateToProps)(ContactForm);
