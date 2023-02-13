import { IoAirplane, IoChevronDown } from "react-icons/io5";

import "./styles.sass";

const Search = () => {
  return (
    <div className="search">
      <div className="search__icon">
        <IoAirplane />
      </div>
      <div className="search__content">
        <div className="search__content-item">
          <span className="search__content-item-label">Departure airport</span>
          <span className="search__content-item-select">
            Mumbai (BOM)
            <IoChevronDown />
          </span>
        </div>
        <div className="search__content-item">
          <span className="search__content-item-label">Arrival airport</span>
          <span className="search__content-item-select">
            Aalborg (AAL)
            <IoChevronDown />
          </span>
        </div>
      </div>
      <button className="search__button">Search</button>
    </div>
  );
};

export default Search;
