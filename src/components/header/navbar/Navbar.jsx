import React from "react";
import "./_navbar.scss";
import logo from "../../../assets/imgs/logo.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__content">
        <div className="navbar__content__logo">
          <Link to="/">
            <img src={logo} alt="logo" className="navbar__content__logo__img" />
          </Link>
        </div>
        <div className="navbar__content__menu">
          <div className="navbar__content__menu__links">
            <NavLink to="/limpieza-en-altura">LIMPIEZA EN ALTURA</NavLink>
            <Link to="/">CONTACTO</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
