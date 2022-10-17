import React from "react";
import AllTeachers from "./sections/allTeachers/AllTeachers";
import TeacherLanding from "./sections/teacherLanding/TeacherLanding";
import { connect } from "react-redux";
import DocumentMeta from "react-document-meta";

function Teachers(meta) {
  return (
    <>
      <DocumentMeta {...meta}>
        <TeacherLanding />
        <AllTeachers />
      </DocumentMeta>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    meta: state.dataText.dataJson.coursesPage.meta,
  };
};

export default connect(mapStateToProps)(Teachers);
