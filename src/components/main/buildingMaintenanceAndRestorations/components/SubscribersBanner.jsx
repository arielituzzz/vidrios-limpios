import React from "react";
import { Contact } from "../../../../assets/data";
import mercadoPagoLogo from "../../../../assets/imgs/icons/mercadopago.png"; // 1. Importamos el logo

const SubscribersBanner = () => {
  return (
    // Contenedor principal del banner, centrado en la pantalla
    // Nota: Para que Bootstrap funcione, necesitarías incluir sus CDN en tu index.html o usar un paquete npm.
    // Este código asume que Bootstrap CSS está disponible en el entorno.
    <div className="bg-light d-flex align-items-center justify-content-center p-4">
      {/* Contenedor del banner con degradado (simulado con clases de Bootstrap), texto blanco, esquinas redondeadas y sombra */}
      <div
        className="w-100 mw-100 rounded-3 shadow p-4 p-md-5 text-white text-center"
        style={{ background: "linear-gradient(to right, #0d6efd, #0dcaf0)" }}
      >
        {/* Título principal del banner */}
        <h1 className="display-4 fw-bold mb-3">SERVICIOS EN ALTURA</h1>
        {/* Subtítulo con la oferta, destacando "6 MESES" y "12 cuotas fijas" en amarillo (simulado con clase de Bootstrap) */}
        <p className="fs-3 fw-semibold">
          Abonos hasta <span className="text-warning">6 MESES</span> fijos y
          GRANDES OBRAS en <span className="text-warning">12 CUOTAS!!!</span>
        </p>

        {/* Añadimos una sección para el método de pago */}
        <div className="d-flex justify-content-center align-items-center mt-4 gap-2">
          <p className="m-0 fs-5 opacity-75">Aceptamos</p>
          <img
            src={mercadoPagoLogo}
            alt="Logo de Mercado Pago"
            style={{ height: "50px" }}
          />
        </div>
        <a
          className="btn btn-warning btn-lg mt-5 px-5 py-3 rounded-pill fw-bold text-uppercase shadow"
          href={Contact.whatsApp}
          rel="noreferrer"
          target="_blank"
        >
          ¡Quiero mi Plan!
        </a>
      </div>
    </div>
  );
};

export default SubscribersBanner;
