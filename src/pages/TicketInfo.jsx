import { arrayUnion, doc, onSnapshot, Timestamp, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router'
import { uid } from 'uid'
import { AppContext } from '../App'
import { Message } from '../components/message/Message'
import { TicketBody } from '../components/ticketBody/TicketBody'
import { TicketInfoTop } from '../components/ticketInfoTop/TicketInfoTop'
import { db } from '../firebase'

import useTicketService from '../services/TicketServices'
import { TicketList } from './TicketList'

export const TicketInfo = () => {
   const { currentUser } = useContext(AppContext)
   const { getTicket, loading } = useTicketService();

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
            user: currentUser.displayName
         })
      })
      setMessage('');


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


   return (
      <div className="dashboard-content__body content-body content-body_columns">
         <TicketList ticketInfo={true} />
         <div className="content-body__rows ticket-info">
            <div className="ticket-info__header">
               <TicketInfoTop ticket={ticket} />
               <TicketBody ticket={ticket} />
            </div>
            <div className="ticket-info__messages">
               {chats.map((m) =>
                  <Message {...m} currentUser={currentUser}/>
               )}
            </div>

            <div className="ticket-info__footer form-ticket">
               <form className="form-ticket__elements" onSubmit={handleMessage}>
                  <input className="form-ticket__textarea"
                     name="text" id="#"
                     placeholder='Start typing...'
                     value={message}
                     onChange={(e) => setMessage(e.target.value)} />
               </form>
            </div>
         </div>
      </div>

   )
}
