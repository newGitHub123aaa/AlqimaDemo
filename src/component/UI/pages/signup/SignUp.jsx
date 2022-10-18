import React from "react";
import AllSignUp from "./sections/AllSignUp";
import { connect } from "react-redux";
import DocumentMeta from "react-document-meta";

function SignUp(metaSignUp) {
  return (
    <DocumentMeta {...metaSignUp}>
      <AllSignUp />
    </DocumentMeta>
  );
}

const mapStateToProps = (state) => {
  return {
    metaSignUp: state.dataText.dataJson.coursesPage.meta,
  };
};

export default connect(mapStateToProps)(SignUp);
