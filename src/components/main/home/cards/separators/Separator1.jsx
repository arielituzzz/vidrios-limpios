import React from "react";
import "./separators.scss";
import iconWhatsapp from "../../../../../assets/imgs/icons/whatsapp.svg";
import { Contact } from "../../../../../assets/data";

const Separator1 = () => {
  return (
    <div className="separator1">
      <div className="separator1__content">
        <div className="separator1__content__row1">
          <img
            src={iconWhatsapp}
            alt="iconWhatsapp"
            className="separator1__content__row1__icon"
          />
        </div>
        <div className="separator1__content__row2">
          <p className="separator1__content__row2__text1">
            Consúltenos directamente 11 5461 5971
          </p>
          <p className="separator1__content__row2__text2">
            Envíenos sus imágenes junto con su consulta por Whatsapp y lo
            estaremos asesorando.
          </p>
        </div>
        <div className="separator1__content__row3">
          <button
            type="button"
            className="btn btn-outline-light separator1__content__row3__btn"
          >
            <a
              href={Contact.whatsApp}
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none text-white"
            >
              ENVIAR WHATSAPP
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Separator1;
