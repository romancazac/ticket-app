import { useContext } from 'react'
import Ticket from '../components/ticket/Ticket';
import Loader from "../components/loader/Loader";
import { AppContext } from '../context/appContext';
export const TicketList = ({ ticketInfo }) => {
   const { data, load, value } = useContext(AppContext);

   const renderTickets = () => {
      const search = data.filter(item => item.title.toString().toLowerCase().includes(value));
      return (
         search?.map((item) =>
            <Ticket key={item.id} {...item} ticketInfo={ticketInfo} />
         )
      )
   }
   return (

      <div className="content-body__rows">
         {
            load
               ?
               <Loader />
               :
               renderTickets()
         }

      </div>

   )
}