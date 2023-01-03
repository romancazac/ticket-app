
import React, {createContext, useEffect, useState} from 'react';
import {Routes, Route,  useLocation  } from 'react-router-dom';

import Dashboard  from './pages/Dashboard';
import SignIn from './pages/SignIn';

import './css/style.css'
export const AppContext = createContext();

function App() {
  
  const location = useLocation();
  const locationUrl = location.pathname.slice(1);
  
  const[theme, setTheme] = useState(false);
  const[tickets, setTickets] = useState([
    {
      id:1,
      title:"Concert de cultura generala",
      author:"Jora Cardan",
      date:"12 November 2022",
      priority:"high",
      category:0,
      responsible:true 
    },
    {
      id:2,
      title:"Concert de Craciun",
      author:"Jora Cardan",
      date:"12 November 2022",
      priority:"low",
      category:0,
      responsible:true 
    },
    {
      id:3,
      title:"Revelion",
      author:"Jora Cardan",
      date:"12 November 2022",
      priority:"",
      category:0,
      responsible:true 
    },
    {
      id:4,
      title:"Fuego concert",
      author:"Jora Cardan",
      date:"12 November 2022",
      priority:"low",
      category:0,
      responsible:true 
    },
  ]);
  const[data, setData] = useState([]);
  
  const[filter, setFilter] = useState(0);
  const[sort, setSort] = useState('');
  const[sortSub, setSortSub] = useState('');
  const[search, setSearch] = useState('');

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

  const onSearch = (text) => {
    setSearch(text);
    
  }
  useEffect(() => {
    setData(tickets)
  },[])
  return (
    <AppContext.Provider value={{onSwitch, 
      onFilter, 
      filter,
      sort, 
      onSort, 
      sortSub, 
      onSortSub, 
      search, 
      onSearch,
      data
    }}>

    <div data-theme={theme ?  "light"  : "dark" }> 
      <div className="wrapper">
      <main className={ locationUrl ? "page page-dashboard" : "page page-home" }>
          <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
          </Routes>    
      </main>   
      
      </div>
    </div>
          
    </AppContext.Provider>
  );
}

export default App;
