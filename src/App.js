
import React, { createContext, useEffect, useState,useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import debounce from 'lodash.debounce';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';

import './css/style.css'
import useTicketService from './services/TicketServices';
import { TicketInfo } from './pages/TicketInfo';
import { TicketList } from "./pages/TicketList";
import { Reports } from './pages/Reports';
import { CreateTicket } from './pages/CreateTicket';
export const AppContext = createContext();

function App() {
  const { getAllTickets } = useTicketService();


  const location = useLocation();
  const locationUrl = location.pathname.slice(1);

  const [theme, setTheme] = useState(false);

  const [data, setData] = useState([]);

  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const [sortSub, setSortSub] = useState('');
  
  const [search, setSearch] = useState('');
  const [value, setValue] = useState('');

  const [load, setLoad] = useState(true);

  const onSwitch = () => {
    setTheme(!theme)
  }

  const onFilter = (i) => {
    setFilter(i)
  }
  const onSort = (name) => {
    setSort(name)
  }
  const onSortSub = (name) => {
    setSortSub(name)
  }

  const updateSearch = useCallback(
    debounce((value) => {
        setSearch(value);  
    },1000)
)
  const onSearch = (text) => {
    setValue(text);
    updateSearch(text)
  }

  const fetchTickets = () => {

    getAllTickets({filter, value}).then((data) => setData(data));
    setLoad(false)
  }
 
  useEffect(() => {
    fetchTickets()
  }, [filter,search])
  return (
    <AppContext.Provider value={{
      onSwitch,
      onFilter,
      filter,
      sort,
      onSort,
      sortSub,
      onSortSub,
      value,
      onSearch,
      data,
      load
    }}>

      <div data-theme={theme ? "light" : "dark"}>
        <div className="wrapper">
          <main className={locationUrl ? "page page-dashboard" : "page page-home"}>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="dashboard" element={<Dashboard><TicketList /></Dashboard>} />
              <Route path="dashboard/:id" element={<Dashboard><TicketInfo /></Dashboard>} />
              <Route path="reports" element={<Dashboard><Reports/></Dashboard>}/>
              <Route path="create" element={<Dashboard><CreateTicket/></Dashboard>}/>
            </Routes>
          </main>

        </div>
      </div>

    </AppContext.Provider>
  );
}

export default App;
