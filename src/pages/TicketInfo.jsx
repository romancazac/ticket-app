import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useIcon } from '../hooks/icon.hook'
import useTicketService from '../services/TicketServices'
import { TicketList } from './TicketList'

export const TicketInfo = () => {
   const {getTicket, loading} = useTicketService();
   const{iconSet, iconLable} = useIcon();
   const {idn} = useParams();
   const [ticket, setTicket ] = useState([]);

   const fetchTicket = () => {
      getTicket(idn).then((res) => setTicket(res))
      
   }
   
   useEffect(() => {
      iconSet(ticket.priority?.toString().toLowerCase()); 
   },[ticket]);
   useEffect(() => {
      fetchTicket()
   },[idn]);

   return (
      <div className="dashboard-content__body content-body content-body_columns">
         <TicketList  ticketInfo={true}/>
         <div className="content-body__rows ticket-info">
            <div className="ticket-info__header">
               <div className="ticket-info__top">
                  <h4 className="ticket-info__title">
                    {ticket.title}
                  </h4>
                  <div className="ticket-info__info">
                     <div className={`ticket-info__status ${iconLable}`}>
                        Piority
                     </div>
                     <span>Category: {ticket.category}</span>
                  </div>
               </div>
               <div className="ticket-info__top ticket-body">
                  <p className="ticket-body__text">{ticket.body}</p>
                  <div className="ticket-body__bottom">
                     <div className="ticket-body__l">
                        <span className="ticket-body__name">User name</span>
                        <div className="ticket-body__date">
                           <span className="ticket-body__hor">14:00</span>
                           , 12 November 2022
                        </div>
                     </div>
                     <a href="#" className="ticket-body__show  btn-block">
                        <span>Show attachments</span>
                     </a>
                  </div>
               </div>
            </div>
            <div className="ticket-info__messages">
               <div className="ticket-info__message message-ticket ">
                  <p className="message-ticket__text">

                  </p>
                  <div className="message-ticket__bottom ticket-body__bottom">
                     <div className="ticket-body__l">
                        <span className="ticket-body__name">User name</span>
                        <div className="ticket-body__date">
                           <span className="ticket-body__hor">14:00</span>
                           , 12 November 2022
                        </div>
                     </div>
                     <div className="ticket-body__r">
                        <a href="#" className="ticket-body__show ticket-body__show_blue btn-block">
                           <span>Show attachments</span>
                        </a>
                        <a href="#" className="ticket-body__reply">
                           <span>Reply</span>
                        </a>
                     </div>

                  </div>
               </div>
               <div className="ticket-info__message message-ticket message-ticket_modif">
                  <p className="message-ticket__text">

                  </p>
                  <div className="message-ticket__bottom ticket-body__bottom">
                     <div className="ticket-body__l">
                        <span className="ticket-body__name">User name</span>
                        <div className="ticket-body__date">
                           <span className="ticket-body__hor">14:00</span>
                           , 12 November 2022
                        </div>
                     </div>
                     <div className="ticket-body__r">
                        <a href="#" className="ticket-body__show ticket-body__show_blue btn-block">
                           <span>Show attachments</span>
                        </a>
                        <a href="#" className="ticket-body__reply">
                           <span>Reply</span>
                        </a>
                     </div>

                  </div>
               </div>
               <div className="ticket-info__message message-ticket ">
                  <p className="message-ticket__text">

                  </p>
                  <div className="message-ticket__bottom ticket-body__bottom">
                     <div className="ticket-body__l">
                        <span className="ticket-body__name">User name</span>
                        <div className="ticket-body__date">
                           <span className="ticket-body__hor">14:00</span>
                           , 12 November 2022
                        </div>
                     </div>
                     <div className="ticket-body__r">

                        <a href="#" className="ticket-body__reply">
                           <span>Reply</span>
                        </a>
                     </div>

                  </div>
               </div>

               <div className="ticket-info__message message-ticket ">
                  <p className="message-ticket__text">

                  </p>
                  <div className="message-ticket__bottom ticket-body__bottom">
                     <div className="ticket-body__l">
                        <span className="ticket-body__name">User name</span>
                        <div className="ticket-body__date">
                           <span className="ticket-body__hor">14:00</span>
                           , 12 November 2022
                        </div>
                     </div>
                     <div className="ticket-body__r">
                        <a href="#" className="ticket-body__show ticket-body__show_blue btn-block">
                           <span>Show attachments</span>
                        </a>
                        <a href="#" className="ticket-body__reply">
                           <span>Reply</span>
                        </a>
                     </div>

                  </div>
               </div>
               <div className="ticket-info__message message-ticket message-ticket_modif">
                  <p className="message-ticket__text">

                  </p>
                  <div className="message-ticket__bottom ticket-body__bottom">
                     <div className="ticket-body__l">
                        <span className="ticket-body__name">User name</span>
                        <div className="ticket-body__date">
                           <span className="ticket-body__hor">14:00</span>
                           , 12 November 2022
                        </div>
                     </div>
                     <div className="ticket-body__r">
                        <a href="#" className="ticket-body__show ticket-body__show_blue btn-block">
                           <span>Show attachments</span>
                        </a>
                        <a href="#" className="ticket-body__reply">
                           <span>Reply</span>
                        </a>
                     </div>

                  </div>
               </div>
               <div className="ticket-info__message message-ticket ">
                  <p className="message-ticket__text">

                  </p>
                  <div className="message-ticket__bottom ticket-body__bottom">
                     <div className="ticket-body__l">
                        <span className="ticket-body__name">User name</span>
                        <div className="ticket-body__date">
                           <span className="ticket-body__hor">14:00</span>
                           , 12 November 2022
                        </div>
                     </div>
                     <div className="ticket-body__r">
                        <a href="#" className="ticket-body__show ticket-body__show_blue btn-block">
                           <span>Show attachments</span>
                        </a>
                        <a href="#" className="ticket-body__reply">
                           <span>Reply</span>
                        </a>
                     </div>

                  </div>
               </div>


            </div>

            <div className="ticket-info__footer form-ticket">
               <form action="#" className="form-ticket__elements">
                  <textarea className="form-ticket__textarea" name="text" id="#" defaultValue={'Start typing...'} />
               </form>
            </div>
         </div>
      </div>

   )
}
