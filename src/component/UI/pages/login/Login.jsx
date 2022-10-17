import React from "react";
import DocumentMeta from "react-document-meta";
import AllLogin from "./sections/AllLogin";
import { connect } from "react-redux";

function Login(meta) {
  return (
    <DocumentMeta {...meta}>
      <AllLogin />
    </DocumentMeta>
  );
}
const mapStateToProps = (state) => {
  return {
    meta: state.dataText.dataJson.coursesPage.meta,
  };
};

export default connect(mapStateToProps)(Login);
