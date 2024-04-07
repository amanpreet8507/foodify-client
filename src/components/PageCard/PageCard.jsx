import React from "react";
import "./PageCard.scss";

const PageCard = (props) => {
  return <div className="pageCard">{props.children}</div>;
};

export default PageCard;
