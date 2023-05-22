import React, { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import "./_navbar.scss";
import logo from "../../../assets/imgs/logo.png";
import burgerBotton from "../../../assets/imgs/icons/burger-menu.svg";

const Navbar = ({ handleVisibility }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    handleVisibility(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar__content">
        <div className="navbar__content__logo">
          <img
            src={burgerBotton}
            alt="burgerBotton"
            width={25}
            className="navbar__content__botton"
            onClick={toggleMenu}
          />
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
