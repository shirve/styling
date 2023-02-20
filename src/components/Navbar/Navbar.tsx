import { PlaneIcon } from "../icons/PlaneIcon";
import { MenuIcon } from "../icons/MenuIcon";

import "./styles.sass";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar__logo">
        <PlaneIcon className="navbar__logo-icon" />
        Zabdos
      </a>
      <div className="navbar__links-wrapper">
        <div className="navbar__links">
          <a className="navbar__link" href="/status">
            Flight Status
          </a>
          <a className="navbar__link -outlined" href="/checkin">
            Check In
          </a>
          <img
            src="https://i.pinimg.com/736x/d6/a9/57/d6a957f1d8045c9c973c12bf5968326f.jpg"
            className="navbar__avatar"
            alt="User Profile Avatar"
          />
        </div>
        <button className="navbar__menu">
          <MenuIcon className="navbar__menu-icon" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
