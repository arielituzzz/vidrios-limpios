import React from "react";
import "./_content.scss";
import iconFacebook from "../../../assets/imgs/icons/facebook-f.svg";
import iconWhatsapp from "../../../assets/imgs/icons/whatsapp.svg";
import iconMail from "../../../assets/imgs/icons/envelope-regular.svg";
import iconLocation from "../../../assets/imgs/icons/location.svg";
import iconTelemarketer from "../../../assets/imgs/icons/telemarketer.svg";
import logo from "../../../assets/imgs/logo.png";
import { Contact, telephone1, telephone2 } from "../../../assets/data";
import { ServicesData } from "../../../assets/generators";

const Content = () => {
  return (
    <div className="content">
      <div className="content__container">
        <section className="content__container__section1">
          <a href={Contact.facebook} rel="noreferrer" target="_blank">
            <img
              src={iconFacebook}
              alt="iconFacebook"
              className="content__container__section1__imgFacebook"
            />
          </a>
          <a href={Contact.whatsApp} rel="noreferrer" target="_blank">
            <img
              src={iconWhatsapp}
              alt="iconWhatsapp"
              className="content__container__section1__imgWhatsapp"
            />
          </a>
        </section>
        <section className="content__container__section2">
          <h3 className="content__container__section2__title">Servicios</h3>
          <ul className="content__container__section2__options">
            {ServicesData.map((item, index) => (
              <li
                className="content__container__section2__options__text"
                key={index}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </section>
        <section className="content__container__section3">
          <h3 className="content__container__section3__title">Contactenos</h3>
          <p className="content__container__section3__text">
            <img
              src={iconLocation}
              alt="iconLocation"
              className="content__container__section3__text__icon"
            />{" "}
            Servicios en todo el pais.
          </p>
          <div className="content__container__section3__numbers">
            <a
              href={Contact.whatsApp}
              className="content__container__section3__numbers__text"
            >
              <img
                src={iconTelemarketer}
                alt="iconTelemarketer"
                className="content__container__section3__numbers__text__icon"
              />{" "}
              {telephone1.slice(0, 2) +
                "-" +
                telephone1.slice(2, 6) +
                "-" +
                telephone1.slice(6)}
            </a>
            <a
              href={Contact.whatsApp2}
              className="content__container__section3__numbers__text"
            >
              <img
                src={iconTelemarketer}
                alt="iconTelemarketer"
                className="content__container__section3__numbers__text__icon"
              />{" "}
              {telephone2.slice(0, 2) +
                "-" +
                telephone2.slice(2, 6) +
                "-" +
                telephone2.slice(6)}
            </a>
          </div>
          <a
            href={`mailto:${Contact.mail}`}
            className="content__container__section3__mail"
          >
            <img
              src={iconMail}
              alt="iconMail"
              className="content__container__section3__mail__icon"
            />{" "}
            info@vidrioslimpios.com.ar
          </a>
        </section>
        <section className="content__container__section4">
          <img
            src={logo}
            alt="logo"
            className="content__container__section4__logo"
          />
          <p className="content__container__section4__text">
            Servicios profesionales de limpieza. Nos avala la experiencia desde
            el año 2003. Abonos mensuales, bimestrales, trimestrales con precios
            acordados por escrito. Seriedad, puntualidad y eficiencia.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Content;
