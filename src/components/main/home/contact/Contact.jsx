import React, { useRef, useState } from "react";
import "./_contact.scss";
import { Validator } from "../../../../assets/validator";
import { Contact } from "../../../../assets/data";

const ContactUs = () => {
  const nameRef = useRef(null);
  const telRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const [dialog, setDialog] = useState(" ");

  const sendMail = (e) => {
    e.preventDefault();

    const form = document.getElementById("form-contact");

    const name = nameRef.current.value;
    const tel = telRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    const validator = Validator(name, tel, email, message);

    if (validator === true) {
      return setDialog("Operacion no Permitida!");
    } else {
      setDialog("");

      const mail = {
        attachment: `Consulta por servicios (Email: ${email} - Telefono: ${tel})`,
        to: `${Contact.mail}`,
        body: `${name} desea contactarse!\n\nMensaje: ${message}`,
      };

      const link = `mailto:${mail.to}?subject=${encodeURIComponent(
        mail.attachment
      )}&body=${encodeURIComponent(mail.body)}`;

      form.reset();

      return (window.location.href = link);
    }
  };

  return (
    <div className="contact" onSubmit={sendMail}>
      <form id="form-contact" className="contact__content">
        <h3 className="contact__content__title">Contáctese con nosotros</h3>
        <p className="contact__content__text">
          Puede escribirnos directametne a info@vidrioslimpios.com.ar Atención
          telefónica: 11.5461-5971 De lunes a viernes de 9 a 18hs. y sábados de
          9 a 12hs.
          <span>
            Presupuestos online en 24 horas por Whatsapp al 11.5461-5971
          </span>
        </p>
        <div className="contact__content__row1">
          <input
            id="name"
            type="text"
            placeholder="Nombre *"
            required
            ref={nameRef}
            autoComplete="on"
          />
          <input
            id="telephone"
            type="text"
            placeholder="Telefono *"
            required
            ref={telRef}
            autoComplete="on"
          />
          <input
            id="email"
            type="email"
            placeholder="Email *"
            required
            ref={emailRef}
            autoComplete="on"
          />
        </div>
        <div className="contact__content__row2">
          <textarea
            id="message"
            placeholder="Su mensaje *"
            rows={6}
            required
            ref={messageRef}
            autoComplete="on"
          ></textarea>
        </div>
        <div className="contact__content__row3">
          <button
            type="submit"
            className="btn btn-primary contact__content__row3__btn"
          >
            Enviar Mensaje
          </button>
          <p className="fs-6 text-danger">{dialog}</p>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
