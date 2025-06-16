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
    <div className="header">
      {/* Logo */}
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>

      {/* NavItems */}
      <div className="nav-items">
        <ul>
          <li>Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
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
