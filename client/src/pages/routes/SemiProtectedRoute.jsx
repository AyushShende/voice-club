import { Navigate } from 'react-router-dom';

const SemiProtectedRoute = ({ children, isLoggedIn, isActive }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  if (isLoggedIn && isActive) {
    return <Navigate to="/rooms" />;
  }
  return children;
};
export default SemiProtectedRoute;
