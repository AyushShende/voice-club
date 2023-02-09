import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  if (isLoggedIn && !user.activated) {
    return <Navigate to="/activate" />;
  }
  return children;
};
export default ProtectedRoute;
