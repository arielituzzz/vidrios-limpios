import React, { useState } from "react";
import "./_header.scss";
import Contacts from "./contacts/Contacts";
import Navbar from "./navbar/Navbar";
import BurgerMenu from "./navbar/burgerMenu/BurgerMenu";
import Marquee from "./marquee/Marquee";

const Header = () => {
  const [menuBurgerVisible, setMenuBurgerVisible] = useState(false);

  const handleVisibility = (state) => {
    setMenuBurgerVisible(state);
  };

  return (
    <div className="header">
      <Contacts />
      <Navbar handleVisibility={handleVisibility} />
      {menuBurgerVisible && <BurgerMenu handleVisibility={handleVisibility} />}
      <Marquee />
    </div>
  );
};

export default Header;
