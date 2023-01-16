
import React, { createContext, useEffect, useState, useCallback } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
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

  const currentUser = true;
  const { getAllTickets} = useTicketService();


  const location = useLocation();
  const locationUrl = location.pathname.slice(1);

  const [theme, setTheme] = useState(false);

  const [data, setData] = useState([]);

  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  const [create, setCreate] = useState('');
  const [priority, setPriority] = useState('');
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
  const onCreate = (name) => {

    setCreate(name)
  }
  const onPriority = (name) => {
    setPriority(name)
  }
  const onSortSub = (name) => {
    setSortSub(name)
    setPriority(name)
  }

  const updateSearch = useCallback(
    debounce((value) => {
      setSearch(value);
    }, 1000)
  )
  const onSearch = (text) => {
    setValue(text);
    updateSearch(text)
  }

  const fetchTickets = () => {
    setLoad(true)
    getAllTickets({ filter, value, sort, create,priority }).then((data) => setData(data));
    setLoad(false)
  }

  useEffect(() => {
    
    fetchTickets()
   
  }, [filter, search, sort, create, priority])
  const ProtectedRoute = ({children}) => {
    if(!currentUser) {
      return <Navigate to="/"/>
    }
    return children
  }

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
      load,
      onCreate,
      onPriority
    }}>

      <div data-theme={theme ? "light" : "dark"}>
        <div className="wrapper">
          <main className={locationUrl ? "page page-dashboard" : "page page-home"}>
            <Routes>
              <Route path="/" element={<SignIn user={currentUser}/>} />
              <Route path="/" element={<Dashboard/>}>
                <Route path="tickets" element={<ProtectedRoute><TicketList /></ProtectedRoute>} />
                <Route path="tickets/:id" element={<TicketInfo />} />
                <Route path="reports" element={<Reports />} />
                <Route path="create" element={<CreateTicket />} />
              </Route>

            </Routes>
          </main>

        </div>
      </div>

    </AppContext.Provider>
  );
}

export default App;
