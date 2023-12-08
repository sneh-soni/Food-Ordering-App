import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const CartComponent = (restaurent) => {
  const dispatch = useDispatch();

  const tempRest = restaurent.restaurent;
  return (
    <div className="h-60 w-1/4 border border-black p-1">
      <img
        className="w-full border border-black bg-gray-200"
        src={tempRest.strCategoryThumb}
        alt={tempRest.strCategory}
      />
      <div className="flex justify-between items-center my-1">
        <p className="text-xl font-bold ">{tempRest.strCategory}</p>
        <button
          className="p-2 font-semibold bg-red-300 text-xs"
          onClick={() => dispatch(removeItem(tempRest))}
        >
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default CartComponent;
