import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [logBtn, setLogBtn] = useState("LoggedOut");

  return (
    <div className="flex justify-between items-center h-16 px-5 mb-5">
      <div className="flex gap-3 w-1/4 justify-center items-center">
        <img
          className="h-16 w-16"
          src="https://freesvg.org/img/chef-restaurant-logo-publicdomainvectors.png"
          alt="logo"
        />
        <h1 className="font-bold text-2xl">Food Villa</h1>
      </div>
      <div className="flex w-1/4 gap-3 justify-center items-center">
        <ul className="flex gap-5">
          <li>Home</li>

          <li>
            <Link to={"about"}>About Us</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-3 w-1/4 justify-center items-center">
        <p>Cart</p>
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
