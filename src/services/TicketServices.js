import { useState } from 'react';
import { useHttp } from '../hooks/http.hook';
import { db } from '../firebase';

import { collection, getDocs, addDoc, setDoc, doc, query, where, orderBy, limit } from "firebase/firestore";


const useTicketService = () => {
    const { loading, request, error, clearError } = useHttp();
    const [tickets, setTichets] = useState([])
    const _apiBase = 'http://localhost:3001/';



    const getAllTickets = async (params) => {
        const { currentUser,  sort, currentPage, perPage } = params;

        try {
            
            const user = currentUser.displayName;
  
         
            const sortingEdit = sort == "edit" && "edit" ;
            const sortingAuthor = sort == "author" && "author" ;
            const finalSort = sortingEdit || sortingAuthor  || 'edit';
            const per =  perPage.toString()

            const q = query(collection(db, 'tickets'),orderBy(finalSort , "asc"), limit(!per == false ? per: 10));

            const querySnapshot = await getDocs(q);


            const tickets = querySnapshot.docs.map(doc => (doc.data()))
        

           

            return tickets 
        } catch (error) {

            console.log(error)
        }


    }
    const getTicket = async (id) => {
        try {
            const q = query(collection(db, 'tickets'), where("id", "==", `${id}`));

            const querySnapshot = await getDocs(q);

            const datas = querySnapshot.docs.map(doc => (doc.data()))
            return datas
        } catch (error) {
            console.log(error)
        }

    }
    // create ticket and chat in db
    const createTicket = async (obj, idTicket) => {

        try {
            const tickets = collection(db, "tickets");
            const res = await addDoc(tickets, obj);

            //create empty  chat on firestore
            await setDoc(doc(db, "userChats", idTicket), {
                messages: []
            });
            return res
        } catch (error) {
            console.log(error)
        }


    }


    return { loading, error, clearError, getAllTickets, getTicket, createTicket }
}

export default useTicketService;