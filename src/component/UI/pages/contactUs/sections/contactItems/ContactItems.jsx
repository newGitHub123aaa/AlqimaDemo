import React, { useState } from "react";
import ItemContact from "./units/ItemContact";
// import contact images
import contactImg1 from "../../../../../../assets/icons/contactItem1.svg";
import contactImg2 from "../../../../../../assets/icons/contactItem2.svg";
import contactImg3 from "../../../../../../assets/icons/contactItem3.svg";
import { connect } from "react-redux";

function ContactItems({ contactItems }) {
  const [contactItemImages] = useState([contactImg1, contactImg2, contactImg3]);
  return (
    <section className="contact-items">
      <div className="container">
        {contactItems.map((el, inx) => (
          <ItemContact
            key={inx + el.id}
            image={contactItemImages[inx]}
            header={el.itemHeader}
            address={el.contactAddress}
          />
        ))}
      </div>
    </section>
  );
}
const mapStateToProps = (state) => {
  return {
    contactItems: state.dataText.dataJson.contactsPage.contactItems,
  };
};

export default connect(mapStateToProps)(ContactItems);
