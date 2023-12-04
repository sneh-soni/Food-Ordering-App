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
    <div className="w-full flex justify-center">
      <div className="w-3/4 flex flex-col py-2 border border-black justify-center items-center">
        <img src={res.strCategoryThumb} className="bg-gray-200" />
        <h2 className="font-bold text-2xl underline my-3">{res.strCategory}</h2>
        <h3 className="font-semibold w-1/2">{res.strCategoryDescription}</h3>
      </div>
    </div>
  );
};

export default RestarentMenu;
