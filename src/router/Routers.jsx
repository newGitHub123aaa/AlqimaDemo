// libraries
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// component
import Home from "./../component/UI/pages/home/Home";
import Teachers from "./../component/UI/pages/teachers/Teachers";
import ContactUs from "./../component/UI/pages/contactUs/ContactUs";
import Login from "./../component/UI/pages/login/Login";
import SignUp from "./../component/UI/pages/signup/SignUp";
import NotFound from "./../component/UI/pages/notfound/NotFound";
import Courses from "../component/UI/pages/courses/Courses";

function Router(props) {
  const { lang } = props;
  return (
    <Routes>
      <Route exact path="/home" element={<Home lang={lang} />} />
      <Route exact path="/" element={<Navigate to="/Home" />} />
      <Route exact path="/teachers/:id" element={<Teachers lang={lang} />} />
      <Route exact path="/courses/:id" element={<Courses />} />
      <Route exact path="/contactus" element={<ContactUs />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
