import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CoursesItem from "./units/CoursesItem";
import { NavLink, useParams } from "react-router-dom";
// import images coursesImgs
import coursesImg1 from "../../../../assets/images/courses1.png";

// import images personImages
// import personImg1 from "../../../../assets/images/logo/logo2.png";

function Courses({ coursesPage }) {
  const param = useParams();
  const coursesParamId = param.id;
  // state
  const [coursesImgs] = useState([
    coursesImg1,
    coursesImg1,
    coursesImg1,
    coursesImg1,
    coursesImg1,
    coursesImg1,
    coursesImg1,
    coursesImg1,
    coursesImg1,
    coursesImg1,
    coursesImg1,
    coursesImg1,
    coursesImg1,
    coursesImg1,
    coursesImg1,
    coursesImg1,
    coursesImg1,
    coursesImg1,
    coursesImg1,
    coursesImg1,
    coursesImg1,
    coursesImg1,
    coursesImg1,
    coursesImg1,
  ]);
  // const [personImages] = useState([personImg1, personImg1, personImg1]);
  const [personImages] = useState(["", "", ""]);
  const [coursesPaths] = useState([
    "all",
    "arabic",
    "english",
    "physics",
    "chemistry",
    "biology",
    "maths",
    "history",
    "french",
  ]);
  const [showedCoursePaginated, setShowedCoursePaginated] = useState([0, 9]);
  // methods
  const handleCoursesArray = () => {
    let showCourses = [];
    if (coursesParamId === "all") {
      showCourses = Object.values(coursesPage.coursesItems).flat();
    } else {
      showCourses = coursesPage.coursesItems[`${coursesParamId}`];
    }
    return showCourses;
  };
  const handleNumberCourses = () => {
    let showNumber = 0;
    if (coursesParamId === "all") {
      showNumber = Object.values(coursesPage.coursesItems).flat().length;
    } else {
      showNumber = coursesPage.coursesItems[`${coursesParamId}`].length;
    }
    return showNumber;
  };
  const handleShowedCourse = (nextOrPrev = "next") => {
    let showedCoursePaginatedClone = [...showedCoursePaginated];
    if (nextOrPrev === "next") {
      if (showedCoursePaginatedClone[1] < handleCoursesArray().length) {
        showedCoursePaginatedClone[0] += 9;
        showedCoursePaginatedClone[1] += 9;
      }
    } else if (nextOrPrev === "prev") {
      if (showedCoursePaginatedClone[0] > 0) {
        showedCoursePaginatedClone[0] -= 9;
        showedCoursePaginatedClone[1] -= 9;
      }
    }
    setShowedCoursePaginated(showedCoursePaginatedClone);
  };
  const numsPagesCourses = Math.ceil(handleNumberCourses() / 9);
  return (
    <section className="courses">
      <div className="container">
        <div className="courses-top">
          <h2 className="courses-header">{coursesPage.coursesHeader}</h2>
          <div className="courses-selected-box">
            <label className="courses-selected-label" htmlFor="courses-select">
              {coursesPage.selectedLabel}
            </label>
            <div className="courses-select-box">
              <select name="courses-select" id="courses-select">
                {coursesPage.coursesOption.map((el, inx) => (
                  <option key={inx + el} value={el}>
                    {el}
                  </option>
                ))}
              </select>
              <i className="select-icon fas fa-angle-down"></i>
            </div>
          </div>
        </div>
        <div className="courses-header-filter">
          <ul>
            {coursesPage.headerFilter.map((el, inx) => (
              <NavLink key={inx + el} to={"/courses/" + coursesPaths[inx]}>
                <li className="list-item">{el}</li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="courses-sorted courses-top">
          <h2 className="courses-sorted courses-header">
            {handleNumberCourses()} {coursesPage.coursesNumberTitle}
          </h2>
          <div className="courses-sorted courses-selected-box">
            <label
              className="courses-sorted courses-selected-label"
              htmlFor="courses-select"
            >
              {coursesPage.sortedSelectedLabel}
            </label>
            <div className="courses-sorted courses-select-box">
              <select name="courses-select" id="courses-select">
                {coursesPage.sortedCoursesOption.map((el, inx) => (
                  <option key={inx + el} value={el}>
                    {el}
                  </option>
                ))}
              </select>
              <i className="courses-sorted select-icon fas fa-angle-down"></i>
            </div>
          </div>
        </div>
        <div className="courses-items">
          {handleCoursesArray() &&
            handleCoursesArray()
              .slice(showedCoursePaginated[0], showedCoursePaginated[1])
              .map((el, inx) => (
                <CoursesItem
                  key={el.id}
                  coursesImg={coursesImgs[inx]}
                  itemContentHeader={el.itemContentHeader}
                  rateNum={el.rateNum}
                  rateInfo={el.rateInfo}
                  contentParagraph={el.contentParagraph}
                  participant={el.participant}
                  Hour={el.Hour}
                  lecture={el.lecture}
                  personImage={personImages[inx]}
                  personName={el.personName}
                  bottomPrice={el.bottomPrice}
                />
              ))}
        </div>
        <div className="pagination">
          <i
            className="start fas fa-angle-left"
            onClick={() => handleShowedCourse("prev")}
          ></i>
          <div className="center-bullet">
            {[...Array(numsPagesCourses)].map((el, inx) => (
              <div
                key={inx}
                className={
                  Math.ceil(showedCoursePaginated[1] / 9) === inx + 1 ? "active" : ""
                }
              >
                {el}
              </div>
            ))}
          </div>
          <i
            className="end fas fa-angle-right"
            onClick={() => handleShowedCourse("next")}
          ></i>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    coursesPage: state.dataText.dataJson.coursesPage,
  };
};

export default connect(mapStateToProps)(Courses);
