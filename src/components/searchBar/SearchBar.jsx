import "./searchBar.scss";
import searchIcon from "../../assets/search.png";
import { useState } from "react";
const types = ["buy", "rent"];
const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (value) => {
    setQuery((prev) => ({ ...prev, type: value }));
  };
  return (
    <div className="searchBar">
      <div className="types">
        {types.map((type) => {
          return (
            <button
              key={type}
              className={query.type === type ? "active" : ""}
              onClick={() => switchType(type)}
            >
              {type}
            </button>
          );
        })}
      </div>
      <form>
        <input type="text" placeholder="Location" name="Location" />
        <input type="text" placeholder="Min Price" name="minPrice" />
        <input type="text" placeholder="Max Price" name="maxPrice" />
        <button>
          <img src={searchIcon} alt="Search Icon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
