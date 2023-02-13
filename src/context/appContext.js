
import React, { useState, useMemo, useCallback, useEffect, createContext } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase';
import useFilterData from "../hooks/filter.hook";

import useTicketService from "../services/TicketServices";

export const AppContext = createContext();



export const Context = ({ children }) => {
   const { data, setData, filterData, onFiltrFnc, setFilterData } = useFilterData();
   const { getAllTickets } = useTicketService()
   const [currentUser, setCurrentUser] = useState({});

   const [theme, setTheme] = useState(false);

   const [perPage, setPerPage] = useState([100]);

   const [filter, setFilter] = useState('');

   const [sort, setSort] = useState('');

   const [create, setCreate] = useState('');

   const [priority, setPriority] = useState('');

   const [category, setCategory] = useState('');

   const [status, setStatus] = useState('');

   const [sortSub, setSortSub] = useState('');
   // search
   const [value, setValue] = useState('');

   const [load, setLoad] = useState(true);

   const onSwitch = () => {
      setTheme(!theme)
   }

   const onFilter = (i) => {
      setFilter(i);
   }
   const onSort = (name) => {
      setSort(name)

   }
   const onCreate = (name) => {
      setCreate(name)

      filtersFnc(name)


   }
   const onResetFilter = () => {
      setFilter('');
      setSortSub('');
      setSort('');
      setData(filterData);

   }

   const onSortSub = (name) => {
      setSortSub(name)
      setPriority(name)
      setCategory(name)
      setStatus(name)
      filtersFnc(name)
   }
   const filtersFnc = prop => {

      onFiltrFnc(prop, create, category, status, priority)

   };

   const onSearch = (text) => {
      setValue(text);


   }
   useEffect(() => {
      const unSub = onAuthStateChanged(auth, (user) => {
         setCurrentUser(user);

      });
      return () => {
         unSub();
      }
   }, [])

   const fetchTickets = async () => {
      setLoad(true)
      getAllTickets({ currentUser, sort, create, priority, status, perPage })
         .then((data) => {

            setFilterData(data)
            setData(data);
            setLoad(false)

         })

   }

   useEffect(() => {

      fetchTickets()

   }, [sort]);




   const appContext = useMemo(
      () => ({
         data,
         currentUser,
         setCurrentUser,
         onResetFilter,
         onSortSub,
         onSearch,
         onSwitch,
         onFilter,
         filter,
         onSort,
         onCreate,
         sortSub,
         value,
         load,
         perPage,
         setData,
         filterData,
         setPerPage
      }),
      [data, onSwitch, currentUser, setCurrentUser, onResetFilter, onSortSub, onSearch, onFilter, onSort, onCreate, sortSub,
         value,
         load, perPage,
         setData,
         filterData, setPerPage]
   );


   return (
      <AppContext.Provider value={appContext}>
         <div className="wrapper" data-theme={theme ? "light" : "dark"}>
            {children}
         </div>
      </AppContext.Provider>
   )
}
