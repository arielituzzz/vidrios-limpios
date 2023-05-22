import React from "react";
import "./_contacts.scss";
import iconMail from "../../../assets/imgs/icons/envelope-regular.svg";
import iconPhone from "../../../assets/imgs/icons/phone-solid.svg";
import iconWhatsapp from "../../../assets/imgs/icons/whatsapp.svg";
import iconFacebook from "../../../assets/imgs/icons/facebook-f.svg";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts__row1">
        <p className="contacts__row1__text">
          <img src={iconWhatsapp} alt="iconWhatsapp" width={13} /> 15.5461.5971
        </p>
        <p className="contacts__row1__text">
          <img src={iconPhone} alt="iconPhone" width={13} /> 11.5767.4230
        </p>
      </div>
      <div className="contacts__row2">
        <p className="contacts__row2__text">
          <img src={iconMail} alt="iconMail" width={13} />{" "}
          info@vidrioslimpios.com.ar
        </p>
        <a
          href="https://www.facebook.com/VidriosLimpiosOficial/"
          className="contacts__row1__text"
        >
          <img src={iconFacebook} alt="iconFacebook" width={10} />
        </a>
      </div>
    </div>
  );
};

export default Contacts;
