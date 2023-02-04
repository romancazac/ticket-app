import React,{useEffect} from 'react'
import { useIcon } from '../../hooks/icon.hook'
export const TicketInfoTop = ({ticket}) => {


   const { iconSet, iconLable } = useIcon();
   useEffect(() => {
      iconSet(ticket[0]?.priority.toString().toLowerCase());
   }, [ticket]);
   return (

      <div className="ticket-info__top">
         <h4 className="ticket-info__title">
            {ticket[0]?.title}
         </h4>
         <div className="ticket-info__info">
            <div className={`ticket-info__status ${iconLable}`}>
               Piority
            </div>
            <span>Category: {ticket[0]?.category}</span>
         </div>
      </div>
   )
}
