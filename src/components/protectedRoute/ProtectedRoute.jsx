import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { AppContext } from '../../context/appContext'

   
export const ProtectedRoute = ({ children}) => {
   const {currentUser} = useContext(AppContext)

   if (!currentUser) {
     return <Navigate to="/" />

   }
   return children
 }
