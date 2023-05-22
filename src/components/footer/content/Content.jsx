import React from "react";
import "./_content.scss";
import iconFacebook from "../../../assets/imgs/icons/facebook-f.svg";
import iconWhatsapp from "../../../assets/imgs/icons/whatsapp.svg";
import iconMail from "../../../assets/imgs/icons/envelope-regular.svg";
import iconLocation from "../../../assets/imgs/icons/location.svg";
import iconTelemarketer from "../../../assets/imgs/icons/telemarketer.svg";
import logo from "../../../assets/imgs/logo.png";

const Content = () => {
  return (
    <div className="content">
      <div className="content__container">
        <section className="content__container__section1">
          <img
            src={iconFacebook}
            alt="iconFacebook"
            className="content__container__section1__imgFacebook"
          />
          <img
            src={iconWhatsapp}
            alt="iconWhatsapp"
            className="content__container__section1__imgWhatsapp"
          />
        </section>
        <section className="content__container__section2">
          <h3 className="content__container__section2__title">Servicios</h3>
          <ul className="content__container__section2__options">
            <li className="content__container__section2__options__text">
              Limpieza de Vidrios
            </li>
            <li className="content__container__section2__options__text">
              Limpieza de Oficinas
            </li>
            <li className="content__container__section2__options__text">
              Finales de Obra
            </li>
            <li className="content__container__section2__options__text">
              Limpieza en Altura
            </li>
            <li className="content__container__section2__options__text">
              Limpieza de Consorcios
            </li>
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
            <p className="content__container__section3__numbers__text">
              <img
                src={iconTelemarketer}
                alt="iconTelemarketer"
                className="content__container__section3__numbers__text__icon"
              />{" "}
              15.5461.5971
            </p>
            <p className="content__container__section3__numbers__text">
              <img
                src={iconTelemarketer}
                alt="iconTelemarketer"
                className="content__container__section3__numbers__text__icon"
              />{" "}
              11.5767.4230
            </p>
          </div>
          <a
            href="mailto:info@vidrioslimpios.com.ar"
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
            Servicios profesionales de limpieza. Más de 15 años de experiencia
            nos avalan. Abonos mensuales, bimestrales, trimestrales con precios
            acordados por escrito. Seriedad, puntualidad y eficiencia.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Content;
