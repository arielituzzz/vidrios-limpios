import React from "react";
import "./_burgerMenu.scss";
import { NavLink } from "react-router-dom";

const BurgerMenu = () => {
  return (
    <div className="menuBurger">
      <NavLink className="menuBurger__options" to="/limpieza-en-altura">
        LIMPIEZA EN ALTURA
      </NavLink>
      <NavLink className="menuBurger__options" to="/">
        CONTACTO
      </NavLink>
    </div>
  );
};

export default BurgerMenu;
