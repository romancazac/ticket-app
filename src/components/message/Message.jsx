import React from 'react'

export const Message = ({ user, message, senderId, currentUser, date, reply, onReply }) => {

   return (
      <>
         {
            reply &&
            <div className={senderId === currentUser.uid ? "ticket-info__message message-ticket message-ticket_reply " : "ticket-info__message message-ticket message-ticket_reply message-ticket_modif"}>
               <span className='ticket-body__reply'><span></span></span>
               <p className="message-ticket__text">
                  {
                     reply
                  }
               </p>
            </div>

         }

         <div className={senderId === currentUser.uid ? "ticket-info__message message-ticket " : "ticket-info__message message-ticket message-ticket_modif"}>
            <p className="message-ticket__text">
               {
                  message
               }
            </p>
            <div className="message-ticket__bottom ticket-body__bottom">
               <div className="ticket-body__l">
                  <span className="ticket-body__name">{user}</span>
                  <div className="ticket-body__date">
                     <span className="ticket-body__hor">{date.toDate().toLocaleTimeString()} </span>
                     {date.toDate().toDateString()}
                  </div>
               </div>
               <div className="ticket-body__r">
                  <a href="#" className="ticket-body__show ticket-body__show_blue btn-block">
                     <span>Show attachments</span>
                  </a>
                  <button onClick={() => onReply(message)} className="ticket-body__reply"

                  >
                     <span>Reply</span>
                  </button>
               </div>

            </div>
         </div>

      </>

   )
}
