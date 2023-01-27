import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, isLoggedIn, isActive }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  if (isLoggedIn && !isActive) {
    return <Navigate to="/activate" />;
  }
  return children;
};
export default ProtectedRoute;
