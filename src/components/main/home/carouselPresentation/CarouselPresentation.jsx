import React from "react";
import "./carouselPresentation.scss";
import img1 from "../../../../assets/imgs/img1BigCarousel.png";
import img2 from "../../../../assets/imgs/img2BigCarousel.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CarouselPresentation = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide carouselPresentation"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner carouselPresentation__body">
        <div className="carousel-item active carouselPresentation__body__container">
          <img
            src={img1}
            className="d-block carouselPresentation__body__container__img"
            alt="imgHightRiseCleaning"
          />
          <div className="carousel-caption d-md-block carouselPresentation__body__container__texts">
            <h5>SERVICIOS DE VIDRIOS EN ALTURA</h5>
            <p>
              Equipos de profesionales especializados en la limpieza de todo
              tipo de superficies en altura.
            </p>
            <Link
              to="/servicios-de-altura"
              className="text-decoration-none text-white"
            >
              <button
                type="button"
                className="btn btn-outline-light carouselPresentation__body__container__button"
              >
                MAS INFORMACION
              </button>
            </Link>
          </div>
        </div>
        <div className="carousel-item carouselPresentation__body__container">
          <img
            src={img2}
            className="d-block carouselPresentation__body__container__img"
            alt="imgHightRiseCleaning"
          />
          <div className="carousel-caption d-md-block carouselPresentation__body__container__texts">
            <h5>SERVICIOS DE ALTURA</h5>
            <p>
              Poseemos un excelente equipo de Profesionales certificados y de
              amplia experiencia dispuestos a colaborar para brindarle
              soluciones practicas a esta problematica que se presenta.
            </p>
            <Link
              to="/servicios-de-altura"
              className="text-decoration-none text-white"
            >
              <button
                type="button"
                className="btn btn-outline-light carouselPresentation__body__container__button"
              >
                MAS INFORMACION
              </button>
            </Link>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselPresentation;
