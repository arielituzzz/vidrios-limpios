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
    toggleMenu();
  };

  return (
    <div className="menuBurger">
      {MenuData.map((item, index) => (
        <NavLink
          className="menuBurger__options"
          key={index}
          to={item.link}
          onClick={() => scrollTo(item.title)}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

export default BurgerMenu;
