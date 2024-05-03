import "./navbar.scss";
import logo from "../../assets/logo.png";

const Navbar = () => {
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
      </div>
    </nav>
  );
};

export default Navbar;
