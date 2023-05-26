import React from "react";
import "./_about.scss";
import config from "../../../../config/config";

const About = () => {
  const imgAbout = `${config.imagenBase}/oldSite/d195661ecc233ee68eeae0414a7afe24_work-374-374-c-100.jpg`;
  return (
    <div className="about">
      <div className="about__content">
        <div className="about__content__row1">
          <img
            src={imgAbout}
            alt="imgAbout"
            className="about__content__row1__img"
          />
        </div>
        <div className="about__content__row2">
          <h3 className="about__content__row2__title">Sobre nosotros</h3>
          <p className="about__content__row2__text1">
            Fundada en el 2003, con el nombre de Vidrios Limpios, establecimos
            desde un comienzo nuestra identificación con el compromiso por la
            calidad, eficiencia y resultados satisfactorios a través de un
            servicio de excelencia en distintos locales, consorcios y
            departamentos de Palermo, Recoleta, Chacarita, Colegiales, Belgrano,
            Núñez.
          </p>
          <p className="about__content__row2__text2">
            En un principio se trataba de un emprendimiento personal en plena
            crisis personal y coyuntural de la Argentina, habiendo aprendido el
            oficio de limpiavidrios por intermedio de un maestro de la
            especialidad, con más de 20 años de experiencia. Con los años a
            pedido de nuestros clientes incorporamos la limpieza y mantenimiento
            de oficinas y locales pequeños, además de limpiezas eventuales de
            toldos, techos de policarbonato, cartelería, marquesinas. Seguimos
            creciendo permanentemente incorporando nuevos servicios.
          </p>
          <button
            type="button"
            className="btn btn-primary about__content__row2__btn"
          >
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none text-white"
            >
              Mas sobre nosotros
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
