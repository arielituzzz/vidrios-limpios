import React from "react";
import "./_carouselMarks.scss";
import { MarksData } from "../../../../assets/generators";
import config from "../../../../config/config";

const CarouselMarks = () => {
  return (
    <div className="carouselMarks">
      <div className="carouselMarks__content">
        <div className="carouselMarks__content__title">
          <h5 className="carouselMarks__content__title__text">
            Algunas de las empresas que confiaron en nosotros
          </h5>
        </div>
        <div
          id="carouselExample"
          className="carousel slide carouselMarks__content__slider"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner carouselMarks__content__slider__container">
            <div className="carousel-item active" data-bs-interval="4000">
              <div className="row row-md-1 carouselMarks__content__slider__container__imgs">
                {MarksData.map(
                  (mark) =>
                    MarksData.indexOf(mark) <= 3 && (
                      <div className="col" key={MarksData.indexOf(mark)}>
                        <img
                          src={config.imagenBase + mark.img}
                          className="text-white text-center carouselMarks__content__slider__container__imgs__img"
                          alt={mark.title}
                        />
                      </div>
                    )
                )}
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <div className="row row-md-1 carouselMarks__content__slider__container__imgs">
                {MarksData.map(
                  (mark) =>
                    MarksData.indexOf(mark) > 3 &&
                    MarksData.indexOf(mark) <= 7 && (
                      <div className="col" key={MarksData.indexOf(mark)}>
                        <img
                          src={config.imagenBase + mark.img}
                          className="text-white text-center carouselMarks__content__slider__container__imgs__img"
                          alt={mark.title}
                        />
                      </div>
                    )
                )}
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <div className="row row-md-1 carouselMarks__content__slider__container__imgs">
                {MarksData.map(
                  (mark) =>
                    MarksData.indexOf(mark) > 7 &&
                    MarksData.indexOf(mark) <= 11 && (
                      <div className="col" key={MarksData.indexOf(mark)}>
                        <img
                          src={config.imagenBase + mark.img}
                          className="text-white text-center carouselMarks__content__slider__container__imgs__img"
                          alt={mark.title}
                        />
                      </div>
                    )
                )}
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <div className="row row-md-1 carouselMarks__content__slider__container__imgs">
                {MarksData.map(
                  (mark) =>
                    MarksData.indexOf(mark) > 11 &&
                    MarksData.indexOf(mark) <= 15 && (
                      <div className="col" key={MarksData.indexOf(mark)}>
                        <img
                          src={config.imagenBase + mark.img}
                          className="text-white text-center carouselMarks__content__slider__container__imgs__img"
                          alt={mark.title}
                        />
                      </div>
                    )
                )}
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <div className="row row-md-1 carouselMarks__content__slider__container__imgs">
                {MarksData.map(
                  (mark) =>
                    MarksData.indexOf(mark) > 15 &&
                    MarksData.indexOf(mark) <= 19 && (
                      <div className="col" key={MarksData.indexOf(mark)}>
                        <img
                          src={config.imagenBase + mark.img}
                          className="text-white text-center carouselMarks__content__slider__container__imgs__img"
                          alt={mark.title}
                        />
                      </div>
                    )
                )}
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <div className="row row-md-1 carouselMarks__content__slider__container__imgs">
                {MarksData.map(
                  (mark) =>
                    MarksData.indexOf(mark) > 19 &&
                    MarksData.indexOf(mark) <= 23 && (
                      <div className="col" key={MarksData.indexOf(mark)}>
                        <img
                          src={config.imagenBase + mark.img}
                          className="text-white text-center carouselMarks__content__slider__container__imgs__img"
                          alt={mark.title}
                        />
                      </div>
                    )
                )}
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <div className="row row-md-1 carouselMarks__content__slider__container__imgs">
                {MarksData.map(
                  (mark) =>
                    MarksData.indexOf(mark) > 23 &&
                    MarksData.indexOf(mark) <= 27 && (
                      <div className="col" key={MarksData.indexOf(mark)}>
                        <img
                          src={config.imagenBase + mark.img}
                          className="text-white text-center carouselMarks__content__slider__container__imgs__img"
                          alt={mark.title}
                        />
                      </div>
                    )
                )}
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <div className="row row-md-1 carouselMarks__content__slider__container__imgs">
                {MarksData.map(
                  (mark) =>
                    MarksData.indexOf(mark) > 27 &&
                    MarksData.indexOf(mark) <= 31 && (
                      <div className="col" key={MarksData.indexOf(mark)}>
                        <img
                          src={config.imagenBase + mark.img}
                          className="text-white text-center carouselMarks__content__slider__container__imgs__img"
                          alt={mark.title}
                        />
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselMarks;
