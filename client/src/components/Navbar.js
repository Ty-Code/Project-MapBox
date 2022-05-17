import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import NavBtnContext from '../context/NavBtnContext';

const NavBar = () => {
  const { selectedNavBtn, setSelectedNavBtn } = useContext(NavBtnContext);

  return (
    <nav className="nav">
      <figure>
        <img src={logo} alt="logo" className="logo" />
      </figure>
      <div>
        <Link
          to={'/'}
          className={selectedNavBtn === 'map' ? 'nav--link selected' : 'nav--link'}
          onClick={() => setSelectedNavBtn('map')}
        >
          Map
        </Link>
        <Link
          to={'/favorites'}
          className={selectedNavBtn === 'locations' ? 'nav--link selected' : 'nav--link'}
          onClick={() => setSelectedNavBtn('locations')}
        >
          My Pins
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
