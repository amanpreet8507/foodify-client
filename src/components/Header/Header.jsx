import "../Header/Header.scss";
import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <a href="/">
          <p>Foodify</p>
        </a>
      </div>
      <nav className="header__nav">
        <li className="header__nav--list">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Recipes
          </NavLink>
        </li>
        <li className="header__nav--list">
          <NavLink to="/favourites">Favourites</NavLink>
        </li>
      </nav>
    </div>
  );
};

export default Header;