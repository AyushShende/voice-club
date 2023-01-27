import { Navigate } from 'react-router-dom';

const GuestRoute = ({ children, isLoggedIn }) => {
  if (isLoggedIn) {
    return <Navigate to="/rooms" />;
  }
  return children;
};
export default GuestRoute;
