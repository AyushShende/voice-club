import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const GuestRoute = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  if (isLoggedIn) {
    return <Navigate to="/rooms" />;
  }
  return children;
};
export default GuestRoute;
