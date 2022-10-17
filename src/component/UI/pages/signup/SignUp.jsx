import React from "react";
import AllSignUp from "./sections/AllSignUp";
import { connect } from "react-redux";
import DocumentMeta from "react-document-meta";

function SignUp(meta) {
  return (
    <DocumentMeta {...meta}>
      <AllSignUp />
    </DocumentMeta>
  );
}

const mapStateToProps = (state) => {
  return {
    meta: state.dataText.dataJson.coursesPage.meta,
  };
};

export default connect(mapStateToProps)(SignUp);
