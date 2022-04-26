import React from "react";
import { Link } from "react-router-dom";

import serviceImg1 from "../../image/daawat-basmati-chefs-secretz.jpg";
import serviceImg2 from "../../image/daawat-basmati-super.jpg";
import serviceImg3 from "../../image/daawat-biryani.jpg";
import serviceImg4 from "../../image/daawat-brown-1kg.jpg";
import serviceImg5 from "../../image/daawat-brown-5kg.jpg";
import serviceImg6 from "../../image/daawat-everyday.jpg";
import serviceImg7 from "../../image/daawat-golden-sella-1kg.jpg";
import serviceImg8 from "../../image/daawat-golden-sella-5kg.jpg";
import serviceImg9 from "../../image/daawat-hadel.jpg";
import serviceImg10 from "../../image/daawat-sella-creamy-1kg.jpg";
import serviceImg11 from "../../image/daawat-sella-creamy-5kg.jpg";
import serviceImg12 from "../../image/daawat-tradisional.jpg";
import serviceImg13 from "../../image/daawat-select-premium.jpg";


import Img10 from "../../image/logo-tokped.png"

import "./style.css";

const BerasDaawatList = () => {
  const cardInfo = [
    {imageCard: serviceImg1, title: "BERAS DAAWAT BASMATI CHEFS SECRETZ"},
    {imageCard: serviceImg2, title: "BERAS DAAWAT BASMATI SUPER"},
    {imageCard: serviceImg3, title: "BERAS DAAWAT BIRYANI"},
    {imageCard: serviceImg4, title: "BERAS DAAWAT BROWN 1KG"},
    {imageCard: serviceImg5, title: "BERAS DAAWAT BROWN 5KG"},
    {imageCard: serviceImg6, title: "BERAS DAAWAT EVERYDAY"},
    {imageCard: serviceImg7, title: "BERAS DAAWAT GOLDEN SELLA 1KG"},
    {imageCard: serviceImg8, title: "BERAS DAAWAT GOLDEN SELLA 5KG"},
    {imageCard: serviceImg9, title: "BERAS DAAWAT HADEEL"},
    {imageCard: serviceImg10, title: "BERAS DAAWAT SELLA CREAMY 1KG"},
    {imageCard: serviceImg11, title: "BERAS DAAWAT SELLA CREAMY 5KG"},
    {imageCard: serviceImg12, title: "BERAS DAAWAT TRADITIONAL"},
    {imageCard: serviceImg13, title: "BERAS DAAWAT SELECT PREMIUM"},
  ];

  const renderCard = (card,index)=> {
    return(
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
                  <h3 className="sub-title">PRODUK BERAS DAAWAT</h3>
                </div>
              </div>
            </div>
            
            <div className="row justify-content-center">
                {cardInfo.map(renderCard)}
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
            <Link to="/products-beras" className="cta-btn btn-border">
            Kembali
            </Link>
        </div>
        
      </div>
    </section>
  );
};
export default BerasDaawatList;
