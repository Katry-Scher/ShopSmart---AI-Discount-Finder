import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [product, setProduct] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(product);
  }

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <input
        className="searchBar__input"
        type="text"
        placeholder="Search for a product..."
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      />

      <button className="searchBar__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar; 



        