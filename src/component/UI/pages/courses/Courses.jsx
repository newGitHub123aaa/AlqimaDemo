import React from "react";
import CoursesLanding from "./sections/coursesLanding/CoursesLanding";
import AllCourses from "./sections/AllCourses/AllCourses";
import DocumentMeta from "react-document-meta";
import { connect } from 'react-redux';

function Courses(meta) {
  return (
    <>
      <DocumentMeta {...meta}>
        <CoursesLanding />
        <AllCourses />
      </DocumentMeta>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    meta: state.dataText.dataJson.coursesPage.meta,
  };
};

export default connect(mapStateToProps)(Courses);