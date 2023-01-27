
import { useState } from "react"
export const useSelect = () => {

   // const [activeClient, setActiveClient] = useState([]);
   const [users, setUsers] = useState([]);

   const onUser = (i,activeClient,setActiveClient, checkbox) => {


      const findItem = activeClient.find((item) => item === users[i]);
      if (findItem) {

         setActiveClient(prev => prev.filter((item) => item !== users[i]))
      } else {
         checkbox ?  
         setActiveClient(prev => [...prev, users[i]])
         
         :
         setActiveClient(prev => [users[i]])
      }

   }
   return{ users, onUser, setUsers}
} 