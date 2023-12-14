import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnline from "../utils/useOnline";
import Search from "./Search";
import Restaurents from "./Restaurents";

const Body = () => {
  const [restaurentList, setRestaurentList] = useState([]);
  const [allRestaurents, setAllRestaurents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const fetchedData = await response.json();
      setRestaurentList(fetchedData.categories);
      setAllRestaurents(fetchedData.categories);
    }
    fetchData();
  }, []);

  const status = useOnline();
  if (!status) {
    return <h1>Oops! You are Offline</h1>;
  }

  return allRestaurents?.length === 0 ? (
    <Shimmer />
  ) : (
    <div data-testid="restaurents">
      <Search
        setRestaurentList={setRestaurentList}
        allRestaurents={allRestaurents}
      />
      <Restaurents restaurentList={restaurentList} />
    </div>
  );
};

export default Body;
