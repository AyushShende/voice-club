import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const SemiProtectedRoute = ({ children }) => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  if (isLoggedIn && user.activated) {
    return <Navigate to="/rooms" />;
  }
  return children;
};
export default SemiProtectedRoute;
