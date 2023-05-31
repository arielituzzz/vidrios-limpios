import React, { useState } from "react";
import "./_burgerMenu.scss";
import { NavLink } from "react-router-dom";
import { MenuData } from "../../../../assets/generators";

const BurgerMenu = ({ handleVisibility }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    handleVisibility(!isOpen);
  };

  return (
    <form className="menuBurger" onSubmit={toggleMenu}>
      {MenuData.map((item, index) => (
        <NavLink
          className="menuBurger__options"
          key={index}
          to={item.link}
          onClick={toggleMenu}
        >
          {item.title}
        </NavLink>
      ))}
    </form>
  );
};

export default BurgerMenu;
