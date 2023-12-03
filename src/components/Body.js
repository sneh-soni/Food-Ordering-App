import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
        console.log(fetchedData);
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

  return allRestaurents?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col justify-center items-center">
      <div className="flex w-full justify-center my-5 gap-2">
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
      <div className="flex w-full">
        <div className="flex gap-3 w-1/6 flex-wrap">
          {restaurentList.length === 0 ? (
            <h1>No Restaurents Found</h1>
          ) : (
            restaurentList.map((restaurent) => (
              <Link
                to={"/" + restaurent.idCategory}
                key={restaurent.idCategory}
              >
                <RestaurentCard restaurent={restaurent} />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
