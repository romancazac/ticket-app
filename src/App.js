

import { Routes, Route, useLocation } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';


import { TicketInfo } from './pages/TicketInfo';
import { TicketList } from "./pages/TicketList";
import { Reports } from './pages/Reports';
import { CreateTicket } from './pages/CreateTicket';
import { Login } from './components/login/LogIn';
import { Registration } from './components/registration/Registration';

import { Context } from './context/appContext';
import { ProtectedRoute } from './components/protectedRoute/ProtectedRoute';
import './css/style.css'

function App() {

  const location = useLocation();
  const locationUrl = location.pathname.slice(1);


 
  return (
    <Context >
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
    </Context>
  );
}

export default App;
