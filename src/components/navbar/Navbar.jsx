import "./navbar.scss";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  const user = false;
  return (
    <nav>
      <div className="left">
        <Link className="logo" to="/">
          <img src={logo} alt="logo" />
          <span>Oasis Estate</span>
        </Link>

        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="#">
          <span>About</span>
        </Link>
        <Link>
          <span>Contact</span>
        </Link>
        <Link>
          <span>Agents</span>
        </Link>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>John Doe</span>
            <Link to="profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            {" "}
            <a href="#">
              <button>Sign in</button>
            </a>
            <a href="#">
              <button className="register">Sign up</button>
            </a>
          </>
        )}

        {/* small screens menu */}
        <button className="menuBtn" onClick={() => toggleMenuHandler()}>
          <img src={menu} alt="menu button" />
        </button>
        <div className={`menuItems ${toggleMenu ? "" : "active"}`}>
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
