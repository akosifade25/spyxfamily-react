import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import spyxLogo from '../assets/spyxfamilylogo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={spyxLogo} alt="Spy x Family Logo" />
      </div>

      <div
        className={`menu-icon ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/trailer"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Trailer
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/characters"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Characters
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
