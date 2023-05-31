import React from "react";
import "./_contacts.scss";
import { Contact, telephone1, telephone2 } from "../../../assets/data";
import iconMail from "../../../assets/imgs/icons/envelope-regular.svg";
import iconPhone from "../../../assets/imgs/icons/phone-solid.svg";
import iconWhatsapp from "../../../assets/imgs/icons/whatsapp.svg";
import iconFacebook from "../../../assets/imgs/icons/facebook-f.svg";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts__row1">
        <a
          href={Contact.whatsApp}
          className="contacts__row1__text"
          rel="noreferrer"
          target="_blank"
        >
          <img src={iconWhatsapp} alt="iconWhatsapp" width={13} />
          {telephone1.slice(0, 2) + "-" + telephone1.slice(2)}
        </a>
        <a
          href={Contact.whatsApp2}
          className="contacts__row1__text"
          rel="noreferrer"
          target="_blank"
        >
          <img src={iconPhone} alt="iconPhone" width={13} />
          {telephone2.slice(0, 2) + "-" + telephone2.slice(2)}
        </a>
      </div>
      <div className="contacts__row2">
        <a href={`mailto:${Contact.mail}`} className="contacts__row2__text">
          <img src={iconMail} alt="iconMail" width={13} />
          info@vidrioslimpios.com.ar
        </a>
        <a
          href={Contact.facebook}
          className="contacts__row2__text"
          rel="noreferrer"
          target="_blank"
        >
          <img src={iconFacebook} alt="iconFacebook" width={10} />
        </a>
      </div>
    </div>
  );
};

export default Contacts;
