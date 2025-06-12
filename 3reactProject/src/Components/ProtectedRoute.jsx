import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
    let protect  = JSON.parse(localStorage.getItem('token'));
  if (!protect) {
    return <Navigate to="/login" />
  }
  return children
}

export default ProtectedRoute
