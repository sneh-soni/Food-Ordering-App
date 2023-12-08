import { useSelector, useDispatch } from "react-redux";
import CartComponent from "./CartComponent";
import { emptyCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((Store) => Store.cart.items);
  const dispatch = useDispatch();
  return (
    <>
      <button
        className="bg-stone-300 m-2 p-2"
        onClick={() => dispatch(emptyCart())}
      >
        Empty Cart
      </button>

      <div className="w-full flex justify-center gap-4 flex-wrap">
        {cartItems.length !== 0 ? (
          cartItems.map((restaurent) => {
            return (
              <CartComponent
                restaurent={restaurent}
                key={restaurent.idCategory}
              />
            );
          })
        ) : (
          <p className="m-2 p-2 font-bold text-xl"> Your cart is empty</p>
        )}
      </div>
    </>
  );
};
export default Cart;
