import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./_navbar.scss";
import logo from "../../../assets/imgs/logo.png";
import burgerBotton from "../../../assets/imgs/icons/burger-menu.svg";
import { MenuData } from "../../../assets/generators";

const Navbar = ({ handleVisibility }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    handleVisibility(!isOpen);
  };

  const scrollTo = (section) => {
    let element;
    if (section === "CONTACTO") {
      element = document.getElementById("form-contact");
    } else {
      element = document.getElementById("top");
    }
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
          <Link to="/" onClick={() => scrollTo("/")}>
            <img src={logo} alt="logo" className="navbar__content__logo__img" />
          </Link>
        </div>
        <div id="menu-burger" className="navbar__content__menu">
          <div className="navbar__content__menu__links">
            {MenuData.map((item, index) => {
              return (
                <NavLink
                  to={item.link}
                  key={index}
                  onClick={() => scrollTo(item.title)}
                >
                  {item.title}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
