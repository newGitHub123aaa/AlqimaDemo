import React from "react";
import DocumentMeta from "react-document-meta";
import AllLogin from "./sections/AllLogin";
import { connect } from "react-redux";

function Login({ metaLogin }) {
  return (
    <DocumentMeta {...metaLogin}>
      <div>
        <AllLogin />
      </div>
    </DocumentMeta>
  );
}
const mapStateToProps = (state) => {
  return {
    metaLogin: state.dataText.dataJson.coursesPage.meta,
  };
};

export default connect(mapStateToProps)(Login);
