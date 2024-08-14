import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnNamefreact, setbtnNamereact] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nev-items">
        <ul>
          <li className="list">Home</li>
          <li className="list">About Us</li>
          <li className="list">COntact Us</li>
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
