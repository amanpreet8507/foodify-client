import React from "react";
import { Link } from "react-router-dom";
import "./Buttons.scss";

const CancelButton = (props) => {
  return (
    <Link to={props.link} className="button__link">
      <button className="button button__cancel">{props.text}</button>
    </Link>
  );
};

export default CancelButton