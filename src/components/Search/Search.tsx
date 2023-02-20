import { ArrowDownIcon } from "../icons/ArrowDownIcon";
import { PlaneIcon } from "../icons/PlaneIcon";

import "./styles.sass";

const Search = () => {
  return (
    <div className="search">
      <div className="search__icon-wrapper">
        <PlaneIcon className="search__icon" />
      </div>
      <div className="search__content">
        <div className="search__content-item">
          <span className="search__content-item-label">Departure airport</span>
          <span className="search__content-item-select">
            Mumbai (BOM)
            <ArrowDownIcon height={16} />
          </span>
        </div>
        <div className="search__content-item">
          <span className="search__content-item-label">Arrival airport</span>
          <span className="search__content-item-select">
            Aalborg (AAL)
            <ArrowDownIcon height={16} />
          </span>
        </div>
      </div>
      <button className="search__button">Search</button>
    </div>
  );
};

export default Search;
