import React from "react";

import "../../../styles/sass/header.scss";
import "../../../styles/sass/variables.scss";
const Header = (): JSX.Element => {
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
    </header>
  );
};

export default Header;
