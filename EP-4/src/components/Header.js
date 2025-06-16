import { useEffect, useState } from "react";
import LOGO_URL from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // let btnName = "Login";

  const [btnNameReact, setBtnNameReact] = useState("Login");

  // if no dependency array => useEffect is called on every render
  // if empty dependency array = [] => useEffect is called on first(Initial) render (just once)
  // if dependency array = [btnNameReact] => useEffect is called on every render & whenever btnNameReact changes
  // useEffect(() => {
  //   console.log("useEffect called");
  // }, [btnNameReact]);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex bg-pink-100 sm:bg-yellow-200 lg:bg-green-100 justify-between shadow-lg">
      {/* Logo */}
      <div className="logo-container">
        <img className="w-36" src={LOGO_URL} alt="logo" />
      </div>

      {/* NavItems */}
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="px-4 border-2 border-black bg-green-300"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
