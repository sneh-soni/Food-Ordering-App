import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurentList, setRestaurentList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [allRestaurents, setAllRestaurents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        if (!response.ok) {
          throw new Error("Wrong Data");
        }
        const fetchedData = await response.json();
        setRestaurentList(fetchedData.categories);
        setAllRestaurents(fetchedData.categories);
      } catch (error) {
        console.error("Error Occurred:", error);
      }
    }
    fetchData();
  }, []);

  const handleSearch = () => {
    const filteredRestaurants = allRestaurents.filter((res) =>
      res.strCategory.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestaurentList(filteredRestaurants);
  };

  return allRestaurents.length === 0 ? ( // or restaurentList.length === 0 ?
    <Shimmer />
  ) : (
    <>
      <div className="flex flex-wrap justify-center my-5 gap-2">
        <input
          className="border border-black px-2"
          type="text"
          value={searchText}
          placeholder="search"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="bg-gray-500 px-3 text-white" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="flex flex-wrap gap-10 justify-center">
        {restaurentList.map((restaurent) => (
          <RestaurentCard restaurent={restaurent} key={restaurent.idCategory} />
        ))}
      </div>
    </>
  );
};

export default Body;
