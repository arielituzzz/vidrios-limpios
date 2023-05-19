import React, { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import "./_navbar.scss";
import logo from "../../../assets/imgs/logo.png";

const Navbar = ({ handleVisibility }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    handleVisibility(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar__content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="25"
          fill="white"
          className="navbar__content__botton"
          onClick={toggleMenu}
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
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
