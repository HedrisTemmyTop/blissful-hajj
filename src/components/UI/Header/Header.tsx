import { AiOutlineMenuUnfold } from "react-icons/ai";
import "../../../styles/sass/header.scss";
import "../../../styles/sass/variables.scss";
import { useState } from "react";
const Header = (): JSX.Element => {
  const [show, setShow] = useState(false);
  return (
    <header className="header">
      <nav>
        <aside className="header__logo">LOGO</aside>
        <ul className="header__nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li className="header__nav-links--contact">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
      <AiOutlineMenuUnfold
        className="menu"
        onClick={() => {
          setShow((prev) => !prev);
        }}
      />
      {show ? (
        <ul className={"mobile-nav"}>
          <div className="mobile-nav__container">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Destination</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li className="header__nav-links--contact">
              <a href="#">Contact Us</a>
            </li>
          </div>
        </ul>
      ) : null}
    </header>
  );
};

export default Header;
