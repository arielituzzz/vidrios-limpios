import React from "react";
import { Contact } from "../../../../assets/data";
import mercadoPagoLogo from "../../../../assets/imgs/icons/mercadopago.png"; // 1. Importamos el logo

const SubscribersBanner = () => {
  return (
    // Contenedor principal del banner, centrado en la pantalla
    // // <div className="bg-light d-flex align-items-center justify-content-center p-4">
    <div className="bg-light d-flex align-items-center justify-content-center py-3 px-2">
      {/* Contenedor del banner con degradado (simulado con clases de Bootstrap), texto blanco, esquinas redondeadas y sombra */}
      <div
        // className="w-100 mw-100 rounded-3 shadow p-4 p-md-5 text-white text-center"
        className="w-100 mw-100 rounded-3 shadow p-3 p-md-4 text-white text-center position-relative overflow-hidden"
        style={{ background: "linear-gradient(to right, #0d6efd, #0dcaf0)" }}
      >
        {/* Etiqueta de "Últimos días" con animación */}
        <style>
          {`
            @keyframes pulse-ribbon {
              0% { transform: rotate(-45deg) scale(1); }
              50% { transform: rotate(-45deg) scale(1.1); }
              100% { transform: rotate(-45deg) scale(1); }
            }
          `}
        </style>
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "40px",
            width: "150px",
            backgroundColor: "#dc3545", // Color Rojo
            color: "white",
            transform: "rotate(-45deg)",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "0.65rem",
            padding: "5px 0",
            zIndex: 10,
            animation: "pulse-ribbon 2s infinite ease-in-out",
            textTransform: "uppercase",
            letterSpacing: "1px",
            clipPath:
              "polygon(0 0, 100% 0, 95% 50%, 100% 100%, 0 100%, 5% 50%)",
          }}
        >
          Últimos días
        </div>

        {/* Título principal del banner */}
        {/* <h1 className="display-4 fw-bold mb-3">SERVICIOS EN ALTURA</h1> */}
        {/* Subtítulo con la oferta, destacando "6 MESES" y "12 cuotas fijas" en amarillo (simulado con clase de Bootstrap) */}
        {/* <p className="fs-3 fw-semibold"> */}
        <p className="fs-4 fw-semibold mb-1">
          Abonos hasta <span className="text-warning">6 MESES</span> fijos! Y
          OBRAS/SERVICIOS en hasta{" "}
          <span className="text-warning">12 CUOTAS </span>
          fijas!
        </p>

        {/* Añadimos una sección para el método de pago */}
        {/* <div className="d-flex justify-content-center align-items-center mt-4 gap-2"> */}
        {/* <p className="m-0 fs-5 opacity-75">Aceptamos</p> */}
        <div className="d-flex justify-content-center align-items-center mt-2 gap-2">
          <p className="m-0 fs-6 opacity-75">Aceptamos</p>
          <img
            src={mercadoPagoLogo}
            alt="Logo de Mercado Pago"
            // style={{ height: "50px" }}
            style={{ height: "30px" }}
          />
        </div>
        <a
          // className="btn btn-warning btn-lg mt-5 px-5 py-3 rounded-pill fw-bold text-uppercase shadow"
          className="btn btn-warning mt-3 px-4 py-2 rounded-pill fw-bold text-uppercase shadow"
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
