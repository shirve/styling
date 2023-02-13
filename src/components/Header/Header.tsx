import { FiArrowRight } from "react-icons/fi";

import "./styles.sass";

const Header = () => {
  return (
    <div className="header">
      <div className="header__label">Fly with us to</div>
      <div className="header__content">
        <div className="header__content-title">Bangkok</div>
        <div className="header__content-subtitle">
          A new door to Paradise for just $299
        </div>
        <div className="header__content-description">
          <span>Book now till 25 Jan 2023</span>
          <span>Travel from 25 Jan 2023 to 25 Dec 2023</span>
        </div>
      </div>
      <a href="/booking" className="header__button">
        <span className="header__button-text">Let's Go</span>
        <span className="header__button-icon">
          <FiArrowRight />
        </span>
      </a>
    </div>
  );
};

export default Header;
