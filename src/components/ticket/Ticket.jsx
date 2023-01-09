import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useIcon } from "../../hooks/icon.hook";

const Ticket = ({ title, id, author, date, responsible, priority, edit, ticketInfo}) => {

  const { iconRow, iconLable, iconSet } = useIcon();

  useEffect(() => {
    iconSet(priority.toString().toLowerCase())
  }, [])
  return (
    <Link to={`/dashboard/${id}`} className="content-body__row content-row">
      <span className={`content-row__icon ${iconRow}`}></span>
      <div className="content-row__column">
        <div className="content-row__title">{title}</div>
        <span className={`content-row__lable ${iconLable}`}></span>
      </div>
      {
         ticketInfo ?
          <>
            <div className="content-row__column">
              <span className="content-row__username">{author}</span>
            </div>

            <div className="content-row__column">
              <span className="content-row__date">Created:{date}</span>
              <span className="content-row__username">Edited:{edit}</span>
            </div>
          </>
          :
          <>
            <div className="content-row__column">
              <span className="content-row__username">{author}</span>
              <span className="content-row__date">{date}</span>
            </div>
            <div className="content-row__column">
              <span className="content-row__username">
                {responsible && "Responsible"}
              </span>
            </div>
          </>
      }

    </Link>
  );
};

export default Ticket;
