const Header = () => {
  console.log("Header Rendered");
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
    </div>
  );
};
export default Header;
