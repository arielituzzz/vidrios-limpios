import React from "react";
import "./_presentationThames.scss";
import logoThames from "../../../../assets/imgs/thamesImg.gif";

const PresentationThames = () => {
  return (
    <div className="presentationThames">
      <div className="presentationThames__content">
        <h3 className="presentationThames__content__title">
          <img src={logoThames} alt="logo-thames" />
        </h3>
        <p className="presentationThames__content__text">
          Somos minoristas, mayoristas y distribuidores de productos y artículos
          de limpieza profesional, con presencia en toda la Argentina.<br></br>
          Contamos con 40 años de experiencia y altos conocimientos para
          asesorarlo de forma personalizada y hallar la solución de limpieza que
          más se adapte a sus necesidades.<br></br> En Thames® le ofrecemos el
          portfolio de productos de limpieza más grande y variado del mercado,
          encontrando todo lo que su empresa necesita en un sólo lugar.<br></br>
          Nuestro prestigio se basa en dar respuestas inmediatas, tener los
          precios más competitivos y por estar siempre a la vanguardia en
          tecnología e innovación.<br></br> Proveemos insumos y productos de
          limpieza a: instituciones, industrias, gastronomia, hotelería,
          hospitales, empresas de limpieza, oficinas, laboratorios, caterings,
          consorcios, etc.
        </p>
        <h5 className="presentationThames__content__title">
          Fabricantes de productos químicos de limpieza y convertidores de papel
          tissue
        </h5>
        <p className="presentationThames__content__text">
          Somos líderes en la creación de fórmulas químicas de limpieza
          innovadoras y exitosas. Los productos químicos son desarrollados en
          respuesta a las necesidades del mercado local, siguiendo siempre las
          tendencias del mercado internacional. Para ello, Thames dispone de un
          laboratorio de Investigación & Desarrollo propio, en el que trabajan
          profesionales con años de experiencia en el rubro.<br></br> Los
          productos son fabricados bajo estrictas normas de calidad y seguridad,
          en una moderna planta de 3000m2, de nivel internacional.<br></br>Los
          productos THAMES® de papel tissue y químicos están aprobados por
          organismos gubernamentales como SENASA y ANMAT. De este modo, nuestros
          consumidores confían en THAMES® porque nuestros productos brindan la
          seguridad y la calidad que ellos necesitan, y al mejor precio del
          mercado.
        </p>
        <div className="presentationThames__content__links">
          <h5>Visitenos!</h5>
          <a
            href="https://www.casathames.com/herramientas-de-limpieza/vidrios-altura/ "
            rel="noreferrer"
            target="_blank"
          >
            <p>
              https://www.casathames.com/herramientas-de-limpieza/vidrios-altura/
            </p>
          </a>
          <a
            href="https://www.casathames.com/catalogo/"
            rel="noreferrer"
            target="_blank"
          >
            <p>https://www.casathames.com/catalogo/</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PresentationThames;
