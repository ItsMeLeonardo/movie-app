import { useState } from "react";
import "./style.css";

export default function SearchInput({ size = "normal" }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = ({ target: { value } }) => setSearchValue(value);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (searchValue.trim().length > 0) {
      window.location.href = `/byName/${searchValue}`;
    }
  };

  return (
    <form className={`inputForm ${size}`} onSubmit={handleFormSubmit}>
      <label className={`SearchLabel ${size}`}>
        <button className={`SearchIcon ${size}`} type="submit"></button>
        <input
          className={`SearchInput ${size}`}
          type="search"
          name="search-movie"
          placeholder="Search your favorite movie"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </label>
    </form>
  );
}
