import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
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

const App = () => {
  const isLoggedIn = false;
  const isActive = false;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <GuestRoute isLoggedIn={isLoggedIn} isActive={isActive}>
              <Home />
            </GuestRoute>
          }
        />
        <Route
          path="/authenticate"
          element={
            <GuestRoute isLoggedIn={isLoggedIn} isActive={isActive}>
              <Authenticate />
            </GuestRoute>
          }
        />
        <Route
          path="/activate"
          element={
            <SemiProtectedRoute isLoggedIn={isLoggedIn} isActive={isActive}>
              <Activate />
            </SemiProtectedRoute>
          }
        />
        <Route
          path="/rooms"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn} isActive={isActive}>
              <Rooms />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};
export default App;
