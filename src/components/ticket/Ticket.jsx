import React from "react";

const Ticket = ({ title, author, date, responsible, priority }) => {
  let iconLable = "";
  let iconRow = ""
  switch (priority) {
    case "high":
      iconLable = "icon-high";
      iconRow = "content-row__icon_red"
      break;
    case "low":
      iconLable = "icon-low";
      iconRow = "content-row__icon_blue"
      break;
    default:
      iconLable = "";
      iconRow = "content-row__icon_with";
  }
  return (
    <a href="#" className="content-body__row content-row">
      <span className={`content-row__icon ${iconRow}`}></span>
      <div className="content-row__column">
        <div className="content-row__title">{title}</div>
        <span className={`content-row__lable ${iconLable}`}></span>
      </div>
      <div className="content-row__column">
        <span className="content-row__username">{author}</span>
        <span className="content-row__date">{date}</span>
      </div>
      <div className="content-row__column">
        <span className="content-row__username">
          {responsible && "Responsible"}
        </span>
      </div>
    </a>
  );
};

export default Ticket;
