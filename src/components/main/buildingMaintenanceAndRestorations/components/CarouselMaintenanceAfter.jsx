import React from "react";
import "./_carouselMaintenanceTimeline.scss";

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
            class="carousel slide carouselMaintenanceTimeline__content__slider"
            data-bs-ride="carousel"
            ride="carousel"
          >
            <div class="carousel-inner carouselMaintenanceTimeline__content__slider__container">
              {OperationsData.find(
                (operation) => operation.name === name
              ).imgs.after.map((item, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  data-bs-interval="4000"
                >
                  <div className="row row-md-1 carouselMaintenanceTimeline__content__slider__container__imgs">
                    <div className="col" key={index}>
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
              class="carousel-control-prev"
              type="button"
              data-bs-target={`#${name.replace(/ /g, "")}/After`}
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target={`#${name.replace(/ /g, "")}/After`}
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselMaintenanceAfter;
