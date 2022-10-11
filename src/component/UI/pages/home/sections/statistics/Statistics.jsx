import React from "react";
import { connect } from "react-redux";
import StateItem from "./units/StateItem";

function Statistics({ statistics }) {
  return (
    <section className="statistics">
      <div className="statistics-box">
        <div
          className="sections-wave-svg-top"
          style={{ height: 150, overflow: "hidden", backgroundColor: "white" }}
        >
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M0.00,49.99 C250.93,10.10 343.44,211.08 504.68,52.09 L500.00,0.00 L0.00,0.00 Z"
              style={{ stroke: "none", fill: "#f7f8f9" }}
            />
          </svg>
        </div>
        <div className="container">
          <div className="text-box">
            <h2 className="sec-header">{statistics.textBox.secHeader}</h2>
            <p className="statistics-description">
              {statistics.textBox.statisticsDescription}
            </p>
          </div>
          <div className="units-box">
            {statistics.unitsBox.stateItems.map((el) => (
              <StateItem
                key={el.id}
                number={el.num}
                numberDescriptions={el.numDescription}
              />
            ))}
          </div>
        </div>
        <div
          className="sections-wave-svg-bottom"
          style={{ height: 150, overflow: "hidden", backgroundColor: "#fff" }}
        >
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M0.00,49.99 C250.93,10.10 343.44,211.08 504.68,52.09 L500.00,0.00 L0.00,0.00 Z"
              style={{ stroke: "none", fill: "#f7f8f9" }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
const mapStateToProps = (state) => {
  return {
    statistics: state.dataText.dataJson.home.statistics,
  };
};

export default connect(mapStateToProps)(Statistics);
