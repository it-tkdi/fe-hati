import React from "react";
import { Link } from "react-router-dom";

import serviceImg1 from "../../image/beras-basmati.jpg";
import serviceImg2 from "../../image/beras-daawat.jpg";
import serviceImg3 from "../../image/beras-tdn.jpg";

import Img10 from "../../image/logo-tokped.png"

import "./style.css";

const BerasList = () => {
  return (
    <section className="projects-area projects-page-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <div className="row">
              <div className="col-md-12">
                <div className="site-heading text-center">
                  <h3 className="sub-title">PRODUK BERAS</h3>
                </div>
              </div>
            </div>
            
            <div className="row justify-content-center">
                <div className="col-md-4  col-sm-6">
                    <div className="project-box">
                    <Link to="/products-beras-basmati">
                        <img src={serviceImg1} alt="img" />
                        <h3>
                        BERAS JABAL NUR
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
                {/* <div className="col-md-4  col-sm-6">
                    <div className="project-box">
                    <Link to="/products-beras-daawat">
                        <img src={serviceImg2} alt="img" />
                        <h3>
                        BERAS DAAWAT
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
                </div> */}
                <div className="col-md-4  col-sm-6">
                    <div className="project-box">
                    <Link to="/products-beras-tdn">
                        <img src={serviceImg3} alt="img" />
                        <h3>
                        BERAS TDN
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
                
            </div>

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

        <div className="container mt-3 text-center">
            <Link to="/products" className="cta-btn btn-border">
            Kembali
            </Link>
        </div>
        
      </div>
    </section>
  );
};
export default BerasList;
