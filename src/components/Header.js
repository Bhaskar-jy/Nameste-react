import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlieStatus";

const Header = () => {
  const [btnNamefreact, setbtnNamereact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nev-items">
        <ul>
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
