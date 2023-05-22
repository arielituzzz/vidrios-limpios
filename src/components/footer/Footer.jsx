import React from "react";
import Signature from "./signature/Signature";
import "./_footer.scss";
import Content from "./content/Content";

const Footer = () => {
  return (
    <div className="footer">
      <Content />
      <Signature />
    </div>
  );
};

export default Footer;
