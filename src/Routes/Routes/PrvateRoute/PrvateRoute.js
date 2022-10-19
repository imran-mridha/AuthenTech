import React, { useContext } from 'react';
import { Navigate,useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext/UserContext';

const PrvateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)

  const location = useLocation()
  if (loading) {
    return <div className="flex items-center justify-center space-x-2 h-screen">
      <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
    </div>
  }
  if (user) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrvateRoute;