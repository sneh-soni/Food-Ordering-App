import { useState } from "react";

const Header = () => {
  const [logBtn, setLogBtn] = useState("LoggedOut");

  return (
    <div className="flex justify-between items-center h-16 px-5 mb-5 mt-0">
      <div className="flex gap-2 items-center">
        <img
          className="h-16 w-16"
          src="https://freesvg.org/img/chef-restaurant-logo-publicdomainvectors.png"
          alt="logo"
        />
        <h1 className="font-bold text-2xl">Food Villa</h1>
      </div>
      <div className="flex items-center">
        <ul className="flex gap-5">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      {logBtn === "LoggedOut" ? (
        <button
          className="bg-gray-200 px-4 h-1/2 w-[10%] py-2"
          onClick={() => setLogBtn("LoggedIn")}
        >
          log In
        </button>
      ) : (
        <button
          className="bg-gray-200 px-4 h-1/2 w-[10%] py-2"
          onClick={() => setLogBtn("LoggedOut")}
        >
          log Out
        </button>
      )}
    </div>
  );
};
export default Header;
