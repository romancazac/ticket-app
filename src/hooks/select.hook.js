
import { useState } from "react"
export const useSelect = () => {

   const [activeClient, setActiveClient] = useState([])
   const [users, setUsers] = useState([
    
   ])
   const onUser = (i) => {

      const findItem = activeClient.find((item) => item === users[i]);
      if (findItem) {
         setActiveClient(prev => prev.filter((item) => item !== users[i]))
      } else {
         setActiveClient(prev => [...prev, users[i]])
      }

   }
   return{activeClient,setActiveClient,users, onUser, setUsers}
} 