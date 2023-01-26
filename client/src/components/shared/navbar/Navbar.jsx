import './Navbar.css';
import Logo from '../../../assets/logo.png';

import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="nav container">
      <Link className="nav__logo" to="/">
        <img src={Logo} alt="logo" />
        <span>Voiceclub</span>
      </Link>
    </nav>
  );
};
export default Navbar;
