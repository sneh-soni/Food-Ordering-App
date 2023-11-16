import { RestaurentList } from "../constants";
import RestaurentCard from "./RestaurentCard";
import { useState } from "react";

function filtered(searchText) {
  return RestaurentList.filter((res) => res.name.includes(searchText));
}

const Body = () => {
  const [Restaurents, setRestaurents] = useState(RestaurentList);
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <div className="flex justify-center my-5 gap-2">
        <input
          className="border border-black px-2"
          type="text"
          value={searchText}
          placeholder="search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-gray-500 px-3 text-white"
          onClick={() => {
            setRestaurents(filtered(searchText));
          }}
        >
          Search
        </button>
      </div>
      <div className="flex gap-10 justify-center">
        {Restaurents.map((restaurent) => {
          return <RestaurentCard restaurent={restaurent} key={restaurent.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
