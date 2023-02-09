import './Navbar.css';
import Logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
import { logout } from '../../../http';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../../store/authSlice';

const Navbar = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      const { data } = await logout();
      dispatch(setAuth(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="nav container">
      <Link className="nav__logo" to="/">
        <img src={Logo} alt="logo" />
        <span>Voiceclub</span>
      </Link>
      {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
};
export default Navbar;
