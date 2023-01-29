import { arrayUnion, doc, onSnapshot, Timestamp, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router'
import { uid } from 'uid'
import { AppContext } from '../App'
import { db } from '../firebase'
import { useIcon } from '../hooks/icon.hook'
import useTicketService from '../services/TicketServices'
import { TicketList } from './TicketList'

export const TicketInfo = () => {
   const { currentUser } = useContext(AppContext)
   const { getTicket, loading } = useTicketService();
   const { iconSet, iconLable } = useIcon();
   const { idn } = useParams();
   const [ticket, setTicket] = useState([]);
   const [chats, setChats] = useState([])
   const [message, setMessage] = useState([])
   const fetchTicket = () => {
      getTicket(idn).then((res) => setTicket(res))
   }

   const handleMessage = async () => {

      await updateDoc(doc(db, "userChats", idn), {
         messages: arrayUnion({
            id: uid(),
            message,
            senderId: currentUser.uid,
            date: Timestamp.now(), 
            user:currentUser.displayName
         })
      })
      console.log(message)


   }
   useEffect(() => {

      const keyDownHandler = event => {
         if (event.key === 'Enter') {
            event.preventDefault();
            // 👇️ call submit function here
            handleMessage()
         }
      };

      document.addEventListener('keydown', keyDownHandler);
      return () => {
         document.removeEventListener('keydown', keyDownHandler);
      };
   }, [handleMessage]);

   useEffect(() => {
      const getChat = () => {
         const unSub = onSnapshot(doc(db, "userChats", idn), (doc) => {
            doc.exists() && setChats(doc.data().messages)
         });
         return () => {
            unSub()

         }
      }
      fetchTicket()
      currentUser.uid && getChat()
   }, [idn]);


   useEffect(() => {
      iconSet(ticket[0]?.priority.toString().toLowerCase());
   }, [ticket]);


   console.log(chats)
   return (
      <div className="dashboard-content__body content-body content-body_columns">
         <TicketList ticketInfo={true} />
         <div className="content-body__rows ticket-info">
            <div className="ticket-info__header">

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


               <div className="ticket-info__top ticket-body">
                  <p className="ticket-body__text">{ticket[0]?.body}</p>
                  <div className="ticket-body__bottom">
                     <div className="ticket-body__l">
                        <span className="ticket-body__name">{ticket[0]?.author}</span>
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
               {chats.map((m) =>
                  <div key={m.id} className={m.senderId === currentUser.uid ? "ticket-info__message message-ticket " : "ticket-info__message message-ticket message-ticket_modif"}>
                     <p className="message-ticket__text">
                        {
                           m.message
                        }
                     </p>
                     <div className="message-ticket__bottom ticket-body__bottom">
                        <div className="ticket-body__l">
                           <span className="ticket-body__name">{m.user}</span>
                           <div className="ticket-body__date">
                              <span className="ticket-body__hor"></span>
                              {/* {m.date} */}
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

               )}




            </div>

            <div className="ticket-info__footer form-ticket">
               <form className="form-ticket__elements" onSubmit={handleMessage}>
                  <input className="form-ticket__textarea"
                     name="text" id="#"
                     value={message || 'Start typing...'}

                     onChange={(e) => setMessage(e.target.value)} />
               </form>
            </div>
         </div>
      </div>

   )
}
