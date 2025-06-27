import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({children}) {
   let proteted = JSON.parse(localStorage.getItem("token"))
   if (!proteted) {
    return <Navigate to='/login' />
   }
   return children
}

export default ProtectedRoute
