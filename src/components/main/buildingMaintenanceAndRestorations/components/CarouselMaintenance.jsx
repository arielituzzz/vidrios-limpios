import React from "react";
import "./_carouselMaintenance.scss";
import { OperationsData } from "../../../../assets/generators";
import config from "../../../../config/config";
// import img1 from "../../../../assets/imgs/buildingMaintenanceAndRestorations/1/restauracion-fachada1.jpg";
// import img2 from "../../../../assets/imgs/buildingMaintenanceAndRestorations/1/restauracion-fachada2.jpg";
// import img3 from "../../../../assets/imgs/buildingMaintenanceAndRestorations/1/restauracion-fachada3.jpg";

const CarouselMaintenance = ({ name }) => {
  return (
    <div className="carouselMaintenance">
      <div className="carouselMaintenance__content">
        <div className="carouselMaintenance__content__title">
          <h5 className="carouselMaintenance__content__title__text">
            Carousel
          </h5>
        </div>
        <div>
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide carouselMaintenance__content__slider"
            data-bs-ride="carousel"
            ride="carousel"
          >
            <div class="carousel-inner carouselMaintenance__content__slider__container">
              <h2>{name}</h2>
              {OperationsData.find(
                (operation) => operation.name === name
              ).imgs.map((item, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  data-bs-interval="4000"
                >
                  <div className="row row-md-1 carouselMaintenance__content__slider__container__imgs">
                    <div className="col" key={index}>
                      <h5>{item.title}</h5>
                      <img
                        src={config.imageBase + item.img}
                        className="text-white text-center carouselMaintenance__content__slider__container__imgs__img"
                        alt={item.title}
                      />
                    </div>
                  </div>
                </div>
              ))}

              {/* <div className="carousel-item active" data-bs-interval="4000">
              <div className="row row-md-1 carouselMaintenance__content__slider__container__imgs">
                {OperationsData.map(
                  (mark) =>
                    OperationsData.indexOf(mark) <= 3 && (
                      <div className="col" key={OperationsData.indexOf(mark)}>
                        <img
                          src={config.assetsBase + mark.img}
                          className="text-white text-center carouselMaintenance__content__slider__container__imgs__img"
                          alt={mark.title}
                        />
                      </div>
                    )
                )}
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <div className="row row-md-1 carouselMaintenance__content__slider__container__imgs">
                {OperationsData.map(
                  (mark) =>
                    OperationsData.indexOf(mark) > 3 &&
                    OperationsData.indexOf(mark) <= 7 && (
                      <div className="col" key={OperationsData.indexOf(mark)}>
                        <img
                          src={config.assetsBase + mark.img}
                          className="text-white text-center carouselMaintenance__content__slider__container__imgs__img"
                          alt={mark.title}
                        />
                      </div>
                    )
                )}
              </div>
            </div> */}
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
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
              data-bs-target="#carouselExampleAutoplaying"
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

export default CarouselMaintenance;
