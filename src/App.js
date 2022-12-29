
import React from 'react';
import {Routes, Route  } from 'react-router-dom';

import Dashboard  from './pages/Dashboard';
import SignIn from './pages/SignIn';

import './css/style.css'
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    </div>
  );
}

export default App;
