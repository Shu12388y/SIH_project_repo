import { Link } from "react-router-dom";
import "./style/NavBar.css";

function Navigation() {
  return (
    <>
      <nav className="nav__flex animate__animated animate__slideInDown">
        <div className="flex__side">
          <Link to="/" className="link-text">
            Home
          </Link>
          <Link to="/about" className="link-text">
            About
          </Link>
        </div>
        <div className="flex__right__side">
          <Link to="login" className="link-text">
            Log In
          </Link>
          <Link to="/getstartd" className="button__Style">
            Get Started
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
