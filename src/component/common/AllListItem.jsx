import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink, useLocation, useParams } from "react-router-dom";
// import images coursesImgs
import coursesImg1 from "../../assets/images/courses1.png";
// import images teachersImgs
import teachersImg1 from "../../assets/images/teachers/teacher1.png";
import teachersImg2 from "../../assets/images/teachers/teacher2.png";
import teachersImg3 from "../../assets/images/teachers/teacher3.png";
import teachersImg4 from "../../assets/images/teachers/teacher4.png";
import teachersImg5 from "../../assets/images/teachers/teacher5.png";
import teachersImg6 from "../../assets/images/teachers/teacher6.png";
import teachersImg7 from "../../assets/images/teachers/teacher7.png";
import teachersImg8 from "../../assets/images/teachers/teacher8.png";
import teachersImg9 from "../../assets/images/teachers/teacher9.png";
// import images personImages
// import personImg1 from "../../../../assets/images/logo/logo2.png";
import CoursesItem from "./../UI/pages/courses/sections/AllCourses/units/CoursesItem";
import TeacherItem from "./../UI/pages/teachers/sections/allTeachers/units/TeacherItem";

function AllCourses({ allCourses, allTeachers }) {
  const location = useLocation().pathname.split("/")[1];

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
  const [teachersImgs] = useState([
    teachersImg1,
    teachersImg2,
    teachersImg3,
    teachersImg4,
    teachersImg5,
    teachersImg6,
    teachersImg7,
    teachersImg8,
    teachersImg9,
  ]);
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
  const [showedItemsPaginated, setShowedItemsPaginated] = useState([0, 9]);
  // methods
  const handleCoursesArray = (anyLocation) => {
    let showALL = [];
    if (anyLocation === "courses") {
      if (coursesParamId === "all") {
        showALL = Object.values(allCourses.coursesItems).flat();
      } else {
        showALL = allCourses.coursesItems[`${coursesParamId}`];
      }
    } else if (anyLocation === "teachers") {
      if (coursesParamId === "all") {
        showALL = Object.values(allTeachers.teachersItems).flat();
      } else {
        showALL = [...allTeachers.teachersItems[`${coursesParamId}`]];
      }
    }

    return showALL;
  };
  const handleNumberCourses = (anyLocations) => {
    let showNumber = 0;
    if ((anyLocations = "courses")) {
      if (coursesParamId === "all") {
        showNumber = Object.values(allCourses.coursesItems).flat().length;
      } else {
        showNumber = allCourses.coursesItems[`${coursesParamId}`].length;
      }
    } else if ((anyLocations = "teachers")) {
      if (coursesParamId === "all") {
        showNumber = Object.values(allCourses.coursesItems).flat().length;
      } else {
        showNumber = allCourses.coursesItems[`${coursesParamId}`].length;
      }
    }
    return showNumber;
  };
  const handleShowedCourse = (nextOrPrev = "next") => {
    let showedItemsPaginatedClone = [...showedItemsPaginated];
    if (nextOrPrev === "next") {
      if (showedItemsPaginatedClone[1] < handleCoursesArray(location).length) {
        showedItemsPaginatedClone[0] += 9;
        showedItemsPaginatedClone[1] += 9;
      }
    } else if (nextOrPrev === "prev") {
      if (showedItemsPaginatedClone[0] > 0) {
        showedItemsPaginatedClone[0] -= 9;
        showedItemsPaginatedClone[1] -= 9;
      }
    }
    setShowedItemsPaginated(showedItemsPaginatedClone);
  };
  const numsPagesCourses = Math.ceil(handleNumberCourses(location) / 9);
  return (
    <>
      <section className="All">
        <div className="container">
          <div className="All-top">
            <h2 className="courses-header">
              {location === "courses"
                ? allCourses.coursesHeader
                : location === "teachers"
                ? allTeachers.teachersHeader
                : ""}
            </h2>
            <div className="courses-selected-box">
              <label
                className="courses-selected-label"
                htmlFor="courses-select"
              >
                {location === "courses"
                  ? allCourses.selectedLabel
                  : location === "teachers"
                  ? allTeachers.selectedLabel
                  : ""}
              </label>
              <div className="courses-select-box">
                <select name="courses-select" id="courses-select">
                  {location === "courses"
                    ? allCourses.coursesOptions.map((el, inx) => (
                        <option key={inx + el} value={el}>
                          {el}
                        </option>
                      ))
                    : location === "teachers"
                    ? allTeachers.teachersOptions.map((el, inx) => (
                        <option key={inx + el} value={el}>
                          {el}
                        </option>
                      ))
                    : ""}
                </select>
                <i className="select-icon fas fa-angle-down"></i>
              </div>
            </div>
          </div>
          {location === "courses" && (
            <div className="All-header-filter">
              <ul>
                {allCourses.headerFilter.map((el, inx) => (
                  <NavLink key={inx + el} to={"/courses/" + coursesPaths[inx]}>
                    <li className="list-item">{el}</li>
                  </NavLink>
                ))}
              </ul>
            </div>
          )}
          {location === "courses" && (
            <div className="All-sorted All-top">
              <h2 className="courses-sorted courses-header">
                {handleNumberCourses()} {allCourses.coursesNumberTitle}
              </h2>
              <div className="courses-sorted courses-selected-box">
                <label
                  className="courses-sorted courses-selected-label"
                  htmlFor="courses-select"
                >
                  {allCourses.sortedSelectedLabel}
                </label>
                <div className="courses-sorted courses-select-box">
                  <select name="courses-select" id="courses-select">
                    {allCourses.sortedCoursesOptions.map((el, inx) => (
                      <option key={inx + el} value={el}>
                        {el}
                      </option>
                    ))}
                  </select>
                  <i className="courses-sorted select-icon fas fa-angle-down"></i>
                </div>
              </div>
            </div>
          )}
          <div className="All-items">
            {handleCoursesArray(location) &&
              handleCoursesArray(location)
                .slice(showedItemsPaginated[0], showedItemsPaginated[1])
                .map(
                  (el, inx) =>
                    (location === "courses" && (
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
                        personImage={teachersImgs[inx]}
                        personName={el.personName}
                        bottomPrice={el.bottomPrice}
                      />
                    )) ||
                    (location === "teachers" && (
                      <TeacherItem
                        key={el.id}
                        image={teachersImgs[inx]}
                        name={el.name}
                        career={el.career}
                        rate={el.rate}
                      />
                    ))
                )}
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
                    Math.ceil(showedItemsPaginated[1] / 9) === inx + 1
                      ? "active"
                      : ""
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
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    allCourses: state.dataText.dataJson.coursesPage.allCourses,
    allTeachers: state.dataText.dataJson.teachersPage.allTeachers,
  };
};

export default connect(mapStateToProps)(AllCourses);
