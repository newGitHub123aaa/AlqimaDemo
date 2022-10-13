import React, { useState } from "react";
import { connect } from "react-redux";

function Subscribe({ subscribe }) {
  // state
  const [form, setForm] = useState({
    email: ``,
    validate: false,
    errorMassages: {
      email: ``,
    },
  });
  // methods
  const handleChange = (e) => {
    //   clone
    let formClone = { ...form };
    //   edit
    formClone[e.currentTarget.name] = e.currentTarget.value.trim();
    // form validate;
    if (formClone.email.trim() !== "") {
      formClone.errorMassages.email = "";
      formClone.validate = true;
      // setState
      setForm(formClone);
    } else {
      formClone.errorMassages.email = "! fill in the email field";
      formClone.validate = false;
      // setState
      setForm(formClone);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
  };
  return (
    <section className="subscribe">
      <div className="container">
        <div className="subscribe-box">
          <div className="subscribe-top">
            <h2 className="subscribe-header">{subscribe.subscribeHeader}</h2>
            <p className="subscribe-paragraph">
              {subscribe.subscribeParagraph}
            </p>
          </div>
          <div className="subscribe-form">
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={subscribe.subscribePlaceholder}
                  value={form.email}
                  onChange={handleChange}
                />
                <span>
                  {subscribe.subscribeSpan}&thinsp;
                  <span className="odd-words">
                    {subscribe.subscribeSpanOddWords}
                  </span>
                </span>
              </div>
              <button className="subscribe-btn">{subscribe.subscribeBtn}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    subscribe: state.dataText.dataJson.home.subscribe,
  };
};

export default connect(mapStateToProps)(Subscribe);
