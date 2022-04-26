import React from "react";

import Img1 from "../../image/service-01.jpg";
import Img2 from "../../image/service-02.jpg";
import Img3 from "../../image/service-03.jpg";
import Img4 from "../../image/service-04.jpg";
import Img5 from "../../image/service-05.jpg";
import Img6 from "../../image/service-06.jpg";
import Img7 from "../../image/service-07.jpg";
import Img8 from "../../image/service-9.jpg";
import Img9 from "../../image/service-11.jpg";

import "./style.css";

const OurService = () => {
  return (
    <section className="portfolio-area portfolio-page">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6 no-paading">
            <div className="portfolio-box">
              <div className="portfolio-img">
                <img src={Img1} alt="portfolio img" />
              </div>
              <div className="portfolio-text text-center">
                <h2 className="h4">Head Office</h2>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 no-paading">
            <div className="portfolio-box">
              <div className="portfolio-img">
                <img src={Img2} alt="portfolio img" />
              </div>
              <div className="portfolio-text text-center">
                <h2 className="h4">Head Office</h2>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 no-paading">
            <div className="portfolio-box">
              <div className="portfolio-img">
                <img src={Img3} alt="portfolio img" />
              </div>
              <div className="portfolio-text text-center">
                <h2 className="h4">Head Office</h2>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 no-paading">
            <div className="portfolio-box">
              <div className="portfolio-img">
                <img src={Img4} alt="portfolio img" />
              </div>
              <div className="portfolio-text text-center">
                <h2 className="h4">Gudang</h2>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 no-paading">
            <div className="portfolio-box">
              <div className="portfolio-img">
                <img src={Img5} alt="portfolio img" />
              </div>
              <div className="portfolio-text text-center">
                <h2 className="h4">Gudang</h2>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 no-paading">
            <div className="portfolio-box">
              <div className="portfolio-img">
                <img src={Img6} alt="portfolio img" />
              </div>
              <div className="portfolio-text text-center">
                <h2 className="h4">Gudang</h2>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 no-paading">
            <div className="portfolio-box">
              <div className="portfolio-img">
                <img src={Img7} alt="portfolio img" />
              </div>
              <div className="portfolio-text text-center">
                <h2 className="h4">Gudang</h2>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 no-paading">
            <div className="portfolio-box">
              <div className="portfolio-img">
                <img src={Img8} alt="portfolio img" />
              </div>
              <div className="portfolio-text text-center">
                <h2 className="h4">Gudang</h2>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 no-paading">
            <div className="portfolio-box">
              <div className="portfolio-img">
                <img src={Img9} alt="portfolio img" />
              </div>
              <div className="portfolio-text text-center">
                <h2 className="h4">Gudang</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default OurService;
