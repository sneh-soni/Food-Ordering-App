import { useState } from "react";

const Search = ({ setRestaurentList, allRestaurents }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    const filteredRestaurants = allRestaurents.filter((res) =>
      res.strCategory.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestaurentList(filteredRestaurants);
  };

  return (
    <div className="flex w-full justify-center my-5 gap-2">
      <input
        className="border border-black px-2"
        data-testid="search-input"
        type="text"
        value={searchText}
        placeholder="search"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        data-testid="search-Btn"
        className="bg-gray-500 px-3 text-white"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
