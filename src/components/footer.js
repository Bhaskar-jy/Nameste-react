import { LOGO_URL } from "../utils/constants";
const Footer = () => {
  return (
    <div className="footer">
      <div className="nev-items">
        <ul>
          <li className="list">Home</li>
          <li className="list">About Us</li>
          <li className="list">COntact Us</li>
          <li className="list">Cart</li>
        </ul>
      </div>
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
    </div>
  );
};

export default Footer;
