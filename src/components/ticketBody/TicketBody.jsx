import React from 'react'

export const TicketBody = ({ticket}) => {

  return (
   <div className="ticket-info__top ticket-body">
   <p className="ticket-body__text">{ticket[0]?.body}</p>
   <div className="ticket-body__bottom">
      <div className="ticket-body__l">
         <span className="ticket-body__name">{ticket[0]?.author}</span>
         <div className="ticket-body__date">
            <span className="ticket-body__hor">{ticket[0]?.date}</span>
         
         </div>
      </div>
      <a href="#" className="ticket-body__show  btn-block">
         <span>Show attachments</span>
      </a>
   </div>
</div>
  )
}
