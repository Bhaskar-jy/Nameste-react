import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlieStatus";

const Header = () => {
  const [btnNamefreact, setbtnNamereact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-gray-300 shadow-lg mb-2 px-11">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="nev-items flex items-center">
        <ul className="flex p-4 m-4">
          <li>Online Status: {onlineStatus === true ? "🟢" : "🔴"}</li>
          <li className="list">
            <Link to="/">Home</Link>
          </li>
          <li className="list">
            <Link to="/about">About Us</Link>
          </li>
          <li className="list">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="list">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="list">Cart</li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
