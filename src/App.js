
import React, {createContext, useState} from 'react';
import {Routes, Route,  useLocation  } from 'react-router-dom';

import Dashboard  from './pages/Dashboard';
import SignIn from './pages/SignIn';

import './css/style.css'
export const AppContext = createContext();

function App() {
  const [theme, setTheme] = useState(false);
  const location = useLocation();
  const locationUrl = location.pathname;

  const onSwitch = () => {
    setTheme(!theme)
  }

  return (
    <AppContext.Provider value={{onSwitch}}>

    <div data-theme={theme ?  "light"  : "dark" }> 
      <div className="wrapper">
      <main className={ locationUrl ? "page page-dashboard" : "page home-page" }>
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
