import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlieStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNamefreact, setbtnNamereact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store using selector
  //selector - it is a react hook

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-gray-300 shadow-lg mb-2 px-11">
      <div className="logo-container">
        <img className="w-40 mt-5" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {onlineStatus === true ? "🟢" : "🔴"}
          </li>
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
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart- ({cartItems.length} items)</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNamefreact === "Login"
                ? setbtnNamereact("Logout")
                : setbtnNamereact("Login");
            }}
          >
            {btnNamefreact}
          </button>
          <li className="px-4"> {loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
