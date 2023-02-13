import { FaPaperPlane } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";

import "./styles.sass";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/" className="navbar__logo">
        <FaPaperPlane />
        Zabdos
      </a>
      <div className="navbar__links-wrapper">
        <div className="navbar__links">
          <a className="navbar__link" href="/status">
            Flight Status
          </a>
          <a className="navbar__link navbar__link--outlined" href="/checkin">
            Check In
          </a>
          <img
            src="https://i.pinimg.com/736x/d6/a9/57/d6a957f1d8045c9c973c12bf5968326f.jpg"
            className="navbar__avatar"
            alt="avatar"
          />
        </div>
        <button className="navbar__menu">
          <CgMenu />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
