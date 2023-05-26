import React, { useRef, useState } from "react";
import "./_contact.scss";

const Contact = () => {
  const nameRef = useRef(null);
  const telRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const [dialog, setDialog] = useState(" ");

  const sendMail = () => {
    const name = nameRef.current.value;
    const tel = telRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    const validator = () => {
      const forbiddenWords = ["<", ">", "/", "</>", "<script>", "</script>"];

      const inputs = [name, tel, email, message];

      const hasForbiddenWord = inputs.some((str) => {
        return forbiddenWords.some((word) => {
          return str.includes(word);
        });
      });

      if (!name || !tel || !email || !message) return true;

      return hasForbiddenWord;
    };

    validator() === true ? setDialog("Operacion no Permitida!") : setDialog("");

    const attachment = `Consulta por servicios (Email: ${email} - Telefono: ${tel})`;
    const to = "info@vidrioslimpios.com.ar";
    const body = `${name} desea contactarse!\n\nMensaje: ${message}`;

    const link = `mailto:${to}?subject=${encodeURIComponent(
      attachment
    )}&body=${encodeURIComponent(body)}`;

    if (validator() === false) return (window.location.href = link);
  };

  return (
    <div className="contact">
      <form className="contact__content">
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
          />
          <input
            id="name"
            type="text"
            placeholder="Telefono *"
            required
            ref={telRef}
          />
          <input
            id="name"
            type="email"
            placeholder="Email *"
            required
            ref={emailRef}
          />
        </div>
        <div className="contact__content__row2">
          <textarea
            id="message"
            placeholder="Su mensaje *"
            rows={6}
            required
            ref={messageRef}
          ></textarea>
        </div>
        <div className="contact__content__row3">
          <button
            type="submit"
            className="btn btn-primary contact__content__row3__btn"
            onClick={sendMail}
          >
            Enviar Mensaje
          </button>
          <p className="fs-6 text-danger">{dialog}</p>
        </div>
      </form>
    </div>
  );
};

export default Contact;
