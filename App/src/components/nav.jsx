import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <nav className="nav">
    <Link to="/" className="nav-link">Home</Link>
    <Link to="/" className="nav-link">Rick</Link>
  </nav>
);

export default Nav;
