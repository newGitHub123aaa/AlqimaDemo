import React from "react";
import {useNavigate } from "react-router-dom";

function CoButton({goTo, contentText, className}) {
  const navigate = useNavigate();
  const handleSignGo = (path) => {
    navigate(`/${path}`);
  };

  return (
    <button className={className} onClick={() => handleSignGo(contentText)}>
      {contentText}
    </button>
  );
}

export default CoButton;
