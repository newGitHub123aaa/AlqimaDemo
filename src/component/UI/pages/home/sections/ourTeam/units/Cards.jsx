import React from "react";

function Cards({ className, imgCard, headerCard, paragraphCard }) {
  return (
    <div className="card-box">
      <div className={className}>
        <div className="hand-img-card">
          <img src={imgCard} alt="" />
        </div>
        <div className="text-card">
          <h4 className="header-card">{headerCard}</h4>
          <p className="paragraph-card">{paragraphCard}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
