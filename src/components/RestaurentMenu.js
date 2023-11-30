import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestarentMenu = () => {
  const { id } = useParams();
  const [res, setRes] = useState(null);

  useEffect(() => {
    async function fetchedData() {
      const fetchedData = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await fetchedData.json();
      setRes(data?.categories?.[id - 1]);
    }
    fetchedData();
  }, []);

  return !res ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <img src={res.strCategoryThumb} />
        <h2>{res.strCategory}</h2>
        <h3>{res.strCategoryDescription}</h3>
      </div>
    </>
  );
};

export default RestarentMenu;
