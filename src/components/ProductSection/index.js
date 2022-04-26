import React from "react";
import { Link } from "react-router-dom";

import productImg1 from "../../image/product-section-1.png";
import projectImg2 from "../../image/product-section-4.png";
import projectImg3 from "../../image/product-section-2.png";

import "./style.css";

const 
ProductSection = () => {
  return (
    <section className="projects-area pt-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <div className="site-heading">
              <h3 className="sub-title">PRODUCTS</h3>
              <h2 className="section-title">Our Best Products.</h2>
            </div>
            <div className="project-box" data-aos="fade-up">
                <img src={productImg1} alt="img" />
                <h3>
                  BERAS BASMATI
                  <br /> JABAL NUR
                </h3>
            </div>
            <div className="text-center mt-5 d-lg-block d-none">
              <Link to="/products" className="cta-btn btn-fill">
                See More Products
              </Link>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="project-box" data-aos="fade-up">
                <img src={projectImg3} alt="img" />
                <h3>
                  BERAS LOKAL
                  <br /> JABAL NUR
                </h3>
            </div>
            <div className="project-box" data-aos="fade-up">
                <img src={projectImg2} alt="img" />
                <h3>
                  DAGING TENDERLOIN ANGUS
                  {/* <br /> IN AUSTRALIA */}
                </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
