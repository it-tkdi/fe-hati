import React from "react";
import { Link } from "react-router-dom";

import serviceImg1 from "../../image/daging-cube-roll-angus-1.jpg";
import serviceImg2 from "../../image/daging-cube-roll-angus-2.jpg";
import serviceImg3 from "../../image/daging-cube-roll-angus-3.jpg";
import serviceImg4 from "../../image/daging-sapi.jpg";
import serviceImg5 from "../../image/daging-striploin-angus-2.jpg";
import serviceImg6 from "../../image/daging-striploin-angus-3.jpg";
import serviceImg7 from "../../image/daging-tenderloin-angus-1.jpg";
import serviceImg8 from "../../image/daging-tenderloin-angus-2.jpg";
import serviceImg9 from "../../image/daging-tenderloin-angus-3.jpg";
import serviceImg10 from "../../image/daging-tenderloin-mb7-1.jpg";
import serviceImg11 from "../../image/daging-tenderloin-mb7-2.jpg";
import serviceImg12 from "../../image/daging-tenderloin-mb7-3.jpg";
import serviceImg13 from "../../image/daging-tenderloin-wagyu-1.jpg";
import serviceImg14 from "../../image/daging-tenderloin-wagyu-2.jpg";
import serviceImg15 from "../../image/daging-tenderloin-wagyu-3.jpg";


import Img10 from "../../image/logo-tokped.png"

import "./style.css";

const DagingSapiList = () => {
  const cardInfo = [
    {imageCard: serviceImg1, title: "DAGING SAPI CUBE ROLL ANGUS"},
    {imageCard: serviceImg2, title: "DAGING SAPI CUBE ROLL ANGUS"},
    {imageCard: serviceImg3, title: "DAGING SAPI CUBE ROLL ANGUS"},
    {imageCard: serviceImg4, title: "DAGING SAPI STRIPLOIN ANGUS"},
    {imageCard: serviceImg5, title: "DAGING SAPI STRIPLOIN ANGUS"},
    {imageCard: serviceImg6, title: "DAGING SAPI STRIPLOIN ANGUS"},
    {imageCard: serviceImg7, title: "DAGING SAPI TENDERLOIN ANGUS"},
    {imageCard: serviceImg8, title: "DAGING SAPI TENDERLOIN ANGUS"},
    {imageCard: serviceImg9, title: "DAGING SAPI TENDERLOIN ANGUS"},
    {imageCard: serviceImg10, title: "DAGING SAPI TENDERLOIN MB7"},
    {imageCard: serviceImg11, title: "DAGING SAPI TENDERLOIN MB7"},
    {imageCard: serviceImg12, title: "DAGING SAPI TENDERLOIN MB7"},
    {imageCard: serviceImg13, title: "DAGING SAPI TENDERLOIN WAGYU"},
    {imageCard: serviceImg14, title: "DAGING SAPI TENDERLOIN WAGYU"},
    {imageCard: serviceImg15, title: "DAGING SAPI TENDERLOIN WAGYU"},
  ];

  const renderInfo = (card, index)=> {
    return (
      <div className="col-md-4  col-sm-6" key={index}>
          <div className="project-box">
              <img src={card.imageCard} alt="img" />
              <h3>
              {card.title}
              </h3>
          </div>
      </div>
    )
  }
  
  return (
    <section className="projects-area projects-page-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <div className="row">
              <div className="col-md-12">
                <div className="site-heading text-center">
                  <h3 className="sub-title">PRODUK DAGING SAPI</h3>
                </div>
              </div>
            </div>
            
            <div className="row justify-content-center">
                {cardInfo.map(renderInfo)}
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
            <Link to="/products-daging" className="cta-btn btn-border">
            Kembali
            </Link>
        </div>
        
      </div>
    </section>
  );
};
export default DagingSapiList;
