import React from "react";
import "./_carouselMaintenanceTimeline.scss";
import { v4 as uuidv4 } from "uuid";
import { OperationsData } from "../../../../assets/generators";
import config from "../../../../config/config";

const CarouselMaintenanceAfter = ({ name }) => {
  return (
    <div className="carouselMaintenanceTimeline">
      <div className="carouselMaintenanceTimeline__content">
        <div className="carouselMaintenanceTimeline__content__title"></div>
        <div>
          <div
            id={`${name.replace(/ /g, "")}/After`}
            className="carousel slide carouselMaintenanceTimeline__content__slider"
            data-bs-ride="carousel"
            ride="carousel"
          >
            <div className="carousel-inner carouselMaintenanceTimeline__content__slider__container">
              {OperationsData.find(
                (operation) => operation.name === name
              ).imgs.after.map((item, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  data-bs-interval="4000"
                  key={uuidv4()}
                >
                  <div className="row row-md-1 carouselMaintenanceTimeline__content__slider__container__imgs">
                    <div className="col">
                      <img
                        src={config.imageBase + item.img}
                        className="text-white text-center carouselMaintenanceTimeline__content__slider__container__imgs__img"
                        alt={item.title}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#${name.replace(/ /g, "")}/After`}
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
              data-bs-target={`#${name.replace(/ /g, "")}/After`}
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
    </div>
  );
};

export default CarouselMaintenanceAfter;
