import React from "react";
import "./_header.scss";
import Contacts from "./contacts/Contacts";
import Navbar from "./navbar/Navbar";

const Header = () => {
  return (
    <div className="header">
      <Contacts />
      <Navbar />
    </div>
  );
};

export default Header;
