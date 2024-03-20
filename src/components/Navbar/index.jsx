import { useState } from "react";
import "./navbar.css";
import { logo } from "../../assets/images";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibleButton = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo-image" />
        </a>
        {/* Mobile view button */}
        <div
          role="button"
          className="hamburger "
          onClick={() => {
            toggleVisibleButton();
          }}
        >
          {isVisible ? <FaTimes /> : <FaBars />}
        </div>
        {/* Links */}
        <ul className={isVisible ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/">About</a>
          </li>
          <li className="nav-item">
            <a href="/">Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="/">Demo</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
