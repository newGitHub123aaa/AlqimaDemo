import React from "react";
import CoButton from "./../../../../../common/CoButton";

function Landing() {
  return (
    <section className="Landing">
      <div className="container">
        <div className="content-box">
          <h1 className="main-header"></h1>
          <p className="landing-description">
            <span></span>
          </p>
          <div className="button-group">
            <CoButton
              className={"get-started"}
              goto={"#"}
              contentText={"Get Started"}
            />
            <button className="landing-sign-up">Sign Up</button>
          </div>
        </div>
        <div className="banner-box">
          <img src="" alt=""/>
        </div>
      </div>
    </section>
  );
}

export default Landing;

// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L60,112C120,96,240,64,360,74.7C480,85,600,139,720,160C840,181,960,171,1080,154.7C1200,139,1320,117,1380,106.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L60,112C120,96,240,64,360,74.7C480,85,600,139,720,160C840,181,960,171,1080,154.7C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
