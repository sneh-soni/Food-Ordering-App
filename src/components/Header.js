import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [logBtn, setLogBtn] = useState("LoggedOut");

  const cartItems = useSelector((Store) => Store.cart.items);

  return (
    <div className="flex justify-between items-center h-16 px-5 mb-5">
      <div className="flex gap-3 w-1/4 justify-center items-center">
        <img
          className="h-16 w-16"
          src="https://freesvg.org/img/chef-restaurant-logo-publicdomainvectors.png"
          alt="logo"
          data-testid="Logo"
        />
        <h1 className="font-bold text-2xl">Food Villa</h1>
      </div>
      <div className="flex w-1/4 gap-3 justify-center items-center">
        <ul className="flex gap-5">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <li>
            <Link to={"about"}>About Us</Link>
          </li>
          <li>
            <Link to={"Accordion"}>Accordion</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-3 w-1/4 justify-center items-center">
        <Link to={"Cart"}>
          <p data-testid="Cart">
            Cart <span className="font-semibold">({cartItems.length})</span>
          </p>
        </Link>
        {logBtn === "LoggedOut" ? (
          <button
            className="bg-gray-200 px-4 py-2 w-1/3"
            onClick={() => setLogBtn("LoggedIn")}
          >
            log In
          </button>
        ) : (
          <button
            className="bg-gray-200 px-4 py-2 w-1/3"
            onClick={() => setLogBtn("LoggedOut")}
          >
            log Out
          </button>
        )}
      </div>
    </div>
  );
};
export default Header;
