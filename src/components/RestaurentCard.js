import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurentCard = (restaurent) => {
  const tempRest = restaurent.restaurent;

  const dispatch = useDispatch();

  return (
    <div className="h-fit border border-black p-1">
      <img
        className="h-1/2 border border-black bg-gray-200"
        src={tempRest.strCategoryThumb}
        alt={tempRest.strCategory}
      />
      <div className="flex justify-between items-center my-1">
        <p className="text-xl font-bold ">{tempRest.strCategory}</p>
        <button
          className="p-2 font-semibold bg-green-300 text-xs"
          onClick={(event) => {
            dispatch(addItem(tempRest));
            event.preventDefault();
          }}
        >
          Add Item
        </button>
      </div>
    </div>
  );
};
export default RestaurentCard;
