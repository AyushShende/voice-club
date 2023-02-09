import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Loader } from './components';
import './App.css';
import {
  Authenticate,
  Activate,
  Rooms,
  Home,
  GuestRoute,
  SemiProtectedRoute,
  ProtectedRoute,
} from './pages';

import useRefresh from './hooks/useRefresh';

const App = () => {
  const { loading } = useRefresh();
  return loading ? (
    <Loader message="Loading, please wait" />
  ) : (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <GuestRoute>
              <Home />
            </GuestRoute>
          }
        />
        <Route
          path="/authenticate"
          element={
            <GuestRoute>
              <Authenticate />
            </GuestRoute>
          }
        />
        <Route
          path="/activate"
          element={
            <SemiProtectedRoute>
              <Activate />
            </SemiProtectedRoute>
          }
        />
        <Route
          path="/rooms"
          element={
            <ProtectedRoute>
              <Rooms />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};
export default App;
