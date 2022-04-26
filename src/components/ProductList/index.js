import React from "react";
import { Link } from "react-router-dom";

import serviceImg1 from "../../image/thumbnail-beras.jpg";
import serviceImg2 from "../../image/thumbnail-bumbu.jpg";
import serviceImg3 from "../../image/thumbnail-daging.jpg";
import serviceImg4 from "../../image/thumbnail-frozen-food.jpg";

import serviceIcon1 from "../../image/rice-icon.png";
import serviceIcon2 from "../../image/spices-icon.png";
import serviceIcon3 from "../../image/meat-icon.png";
import serviceIcon4 from "../../image/frozen-icon.png";

import Img10 from "../../image/logo-tokped.png"

import "./style.css";

const ProductList = () => {
  return (
    <section className="projects-area projects-page-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <div className="row">
              <div className="col-md-12">
                <div className="site-heading text-center">
                  <h3 className="sub-title">OUR PRODUCTS</h3>
                </div>
              </div>
            </div>
    
          <section className="service-area service-page-area">
            <div className="container">
              <div className="row justify-content-center">
                
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="service-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="service-icon">
                      <img src={serviceIcon1} alt="img" width={100} height={100} />
                    </div>
                    <div className="service-text">
                      <h3>Beras</h3>
                      <p>
                        Beras organik yang diolah dari padi pilihan
                        berkualitas tinggi
                      </p>
                      <Link to="/products-beras" className="cta-btn btn-border">
                        View More
                      </Link>
                    </div>
                    <img src={serviceImg1} alt="img" />
                  </div>
                </div>
                
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="service-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="service-icon">
                      <img src={serviceIcon4} alt="img" width={100} height={100} />
                    </div>
                    <div className="service-text">
                      <h3>HATI Frozen Food</h3>
                      <p>
                        Frozen food untuk kebutuhan hidangan makanan keluarga di rumah
                      </p>
                      <Link to="/products-frozen-food" className="cta-btn btn-border">
                        View More
                      </Link>
                    </div>
                    <img src={serviceImg4} alt="img" />
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div
                    className="service-box"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="service-icon">
                      <img src={serviceIcon3} alt="img" width={100} height={100} />
                    </div>
                    <div className="service-text">
                      <h3>Daging</h3>
                      <p>
                        Produk daging segar, beku, maupun olahan yang berkualitas
                      </p>
                      <Link to="/products-daging" className="cta-btn btn-border">
                        View More
                      </Link>
                    </div>
                    <img src={serviceImg3} alt="img" />
                  </div>
                </div>
                
              </div>
            </div>
          </section>
            {/* <div className="row align-items-center justify-content-around">
              <div className="col-md-5  col-sm-6">
                <div className="project-box">
                  <Link to="/products-single-six">
                    <img src={productImg6} alt="img" />
                    <h3>
                      BERAS BASMATI
                      <br /> HIGH QUALITY
                    </h3>
                    <div className="project-zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-eye"
                      >
                        <path
                          stroke="#ffffff"
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-5  col-sm-6">
                <div className="project-box">
                  <Link to="/products-single">
                    <img src={productImg1} alt="img" />
                    <h3>
                      JABAL NUR
                      <br /> HIGH QUALITY
                    </h3>
                    <div className="project-zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-eye"
                      >
                        <path
                          stroke="#ffffff"
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/products-single-two">
                    <img src={productImg2} alt="img" />
                    <h3>
                      BERAS PREMIUM LOKAL TOKO DAGING NUSANTARA
                    </h3>
                    <div className="project-zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-eye"
                      >
                        <path
                          stroke="#ffffff"
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/products-single-five">
                    <img src={productImg5} alt="img" />
                    <h3>
                      VEGETABLES
                    </h3>
                    <div className="project-zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-eye"
                      >
                        <path
                          stroke="#ffffff"
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/products-single-three">
                    <img src={productImg3} alt="img" />
                    <h3>
                      BEEF CUTTING
                    </h3>
                    <div className="project-zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-eye"
                      >
                        <path
                          stroke="#ffffff"
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/products-single-four">
                    <img src={productImg4} alt="img" />
                    <h3>
                      BEEF RENDANG
                    </h3>
                    <div className="project-zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-eye"
                      >
                        <path
                          stroke="#ffffff"
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              
              
            </div> */}
          </div>
        </div>

        <div className="container mt-5">
          <div className="row text-center">
            <div className="col-lg-12">
              <p className="text-center">
                Jika anda tertarik dapat menghubungi kami di whatsapp dan email : 
              </p>
                <a href="https://api.whatsapp.com/send?phone=6285691598109" target="_blank" rel="noreferrer" className="cta-btn btn-fill size_btn me-2">Whatsapp</a>
                <a href="mailto:julie@hajaraswadtaniindonesia.com" className="cta-btn btn-fill size_btn mt-2 mb-2">Email</a>
              <p className="text-center">
                Atau beli di
              </p>
              <a href="https://www.tokopedia.com/hajaraswadtaniindonesia?source=universe&st=product" target="_blank" rel="noreferrer">
                <img src={Img10} alt="img" className="img_logo" />
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};
export default ProductList;
