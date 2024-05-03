import "./navbar.scss";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <nav>
      <div className="left">
        <a href="#" className="logo">
          <img src={logo} alt="logo" />
          <span>Oasis Estate</span>
        </a>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Agents</a>
      </div>
      <div className="right">
        <a href="#">
          <button>Sign in</button>
        </a>
        <a href="#">
          <button className="register">Sign up</button>
        </a>

        {/* small screens menu */}
        <button className="menuBtn" onClick={() => toggleMenuHandler()}>
          <img src={menu} alt="menu button" />
        </button>
        <div className={`menuItems ${toggleMenu ? "active" : null}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Agents</a>
          <a href="#">Sign in</a>
          <a href="#">Sign up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
