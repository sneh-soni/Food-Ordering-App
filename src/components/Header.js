import { useState } from "react";

const Header = () => {
  const [logBtn, setLogBtn] = useState("LoggedOut");

  return (
    <div className="flex justify-between h-16 px-5 mb-5">
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
        <button onClick={() => setLogBtn("LoggedIn")}>logIn</button>
      ) : (
        <button onClick={() => setLogBtn("LoggedOut")}>logOut</button>
      )}
    </div>
  );
};
export default Header;
