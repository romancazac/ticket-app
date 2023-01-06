import { useContext } from 'react'
import Ticket from '../components/ticket/Ticket';
import Loader from "../components/loader/Loader";
import { AppContext } from '../App';
export const TicketList = ({ticketInfo}) => {
   const { data, load } = useContext(AppContext);
   return (

         <div className="content-body__rows">
            {
               load
                  ?
                  <Loader />
                  :
                  data?.map((item) =>
                     <Ticket key={item.id} {...item}  ticketInfo={ticketInfo} />
                  )

            }

         </div>
    
   )
}
