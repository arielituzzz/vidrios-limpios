import React, { useState } from "react";
import "./_burgerMenu.scss";
import { NavLink } from "react-router-dom";

const BurgerMenu = ({ handleVisibility }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    handleVisibility(!isOpen);
  };

  return (
    <div className="menuBurger">
      <NavLink
        className="menuBurger__options"
        to="/limpieza-en-altura"
        onClick={toggleMenu}
      >
        LIMPIEZA EN ALTURA
      </NavLink>
      <NavLink className="menuBurger__options" to="/" onClick={toggleMenu}>
        CONTACTO
      </NavLink>
    </div>
  );
};

export default BurgerMenu;
