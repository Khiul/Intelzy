import React from "react";
import { FaChevronUp } from "react-icons/fa";

function ScrollBtn(props) {
  return (
    <button className="scrollBtn" onClick={props.scrollTop}>
      <FaChevronUp />
    </button>
  );
}

export default ScrollBtn;
