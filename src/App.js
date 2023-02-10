
import React, { createContext, useEffect, useState, useCallback } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import debounce from 'lodash.debounce';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';

import './css/style.css'
import useTicketService from './services/TicketServices';
import useFilterData from './hooks/filter.hook'
import { TicketInfo } from './pages/TicketInfo';
import { TicketList } from "./pages/TicketList";
import { Reports } from './pages/Reports';
import { CreateTicket } from './pages/CreateTicket';
import { Login } from './components/login/LogIn';
import { Registration } from './components/registration/Registration';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './firebase';


export const AppContext = createContext();

function App() {

  const location = useLocation();
  const locationUrl = location.pathname.slice(1);

  const [currentUser, setCurrentUser] = useState({});
  const { getAllTickets } = useTicketService();

  const {data, setData,onFiltrFnc, setFilterData, filterData} = useFilterData();

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
  
    onFiltrFnc(prop,create,category,status,priority)
 
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
    getAllTickets({ currentUser,  sort, create, priority, status, perPage})
      .then((data) => {
        
        setFilterData(data)
        setData(data);
        setLoad(false)

      })

  }

  useEffect(() => {

    fetchTickets()

  }, [sort]);



  


  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/" />

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
      perPage,
      setPerPage,
      onResetFilter,
      currentUser,
      perPage, 
      fetchTickets,
      setData,
      filterData
    }}>


      <div className="wrapper" data-theme={theme ? "light" : "dark"}>
        <main className={!locationUrl || locationUrl == "create-account" ? "page page-home" : "page page-dashboard"}>
          <Routes>
            <Route path="/" element={<SignIn />} >
              <Route path="/" element={<Login title="Sign in" />} />
              <Route path="create-account" element={<Registration title="Create account" />} />
            </Route>

            <Route path="/" element={<Dashboard />}>
              <Route path="tickets" element={<ProtectedRoute><TicketList /></ProtectedRoute>} />
              <Route path="tickets/:idn" element={<ProtectedRoute><TicketInfo /></ProtectedRoute>} />
              <Route path="reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
              <Route path="create" element={<ProtectedRoute><CreateTicket /></ProtectedRoute>} />

            </Route>

          </Routes>
        </main>

      </div>


    </AppContext.Provider>
  );
}

export default App;
