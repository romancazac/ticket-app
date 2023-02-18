import React, { useEffect } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from '../../context/appContext';
import { useIcon } from "../../hooks/icon.hook";

const Ticket = ({ title,category,body,to, id, author, date, priority, edit, ticketInfo, status}) => {

  const { iconRow, iconLable, iconSet } = useIcon();
  const {currentUser,config, onEdit,onDelete} = useContext(AppContext);
  const classUser = author == currentUser.displayName ? "_red" : "";
  const {idn} = useParams();
  
  const obj = {
    id,
    title,
    to,
    author,
    date,
    edit,
    status,
    category,
    body,
    priority
  }


  useEffect(() => {
    iconSet(priority.toString().toLowerCase())
  }, []);



  return (
    <Link to={`/tickets/${id}`} 
    className={id == idn ? `content-body__row content-row _active ${classUser}` : `content-body__row content-row ${classUser}`} 
    onClick={(e) => config ?  e.preventDefault() : '' }>
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
              <span className="content-row__date">Edited:{edit}</span>
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
                {status}
              </span>
            </div>
            {
              config &&
              <div className="content-row__config">
                <button className="content-row__btn" onClick={() => onEdit(obj)}>Edit</button>
                <button className="content-row__btn" onClick={() => onDelete(id)}>Delete</button>
              </div>
            }
          
          </>
      }

    </Link>
  );
};

export default Ticket;
