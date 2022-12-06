import React from "react";
import AllTeachers from "./sections/allTeachers/AllTeachers";
import TeacherLanding from "./sections/teacherLanding/TeacherLanding";
import { connect } from "react-redux";
import DocumentMeta from "react-document-meta";

function Teachers({ metaTeachers }) {

  return (
    <>
      <DocumentMeta {...metaTeachers}>
        <div>
          <TeacherLanding />
          <AllTeachers />
        </div>
      </DocumentMeta>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    metaTeachers: state.dataText.dataJson.coursesPage.meta,
  };
};

export default connect(mapStateToProps)(Teachers);
