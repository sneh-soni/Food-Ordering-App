import RestaurentCard from "./RestaurentCard";
import { Link } from "react-router-dom";

const Restaurents = ({ restaurentList }) => {
  return (
    <div className="flex flex-wrap gap-3 px-5 w-full">
      {restaurentList.length === 0 ? (
        <h1>No Restaurents Found</h1>
      ) : (
        restaurentList.map((restaurent) => {
          return (
            <Link to={"/" + restaurent.idCategory} key={restaurent.idCategory}>
              <RestaurentCard restaurent={restaurent} />
            </Link>
          );
        })
      )}
    </div>
  );
};

export default Restaurents;
