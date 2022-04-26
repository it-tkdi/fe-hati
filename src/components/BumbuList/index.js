import React from "react";
import { Link } from "react-router-dom";

import serviceImg1 from "../../image/bumbu-biryani.jpg";
import serviceImg2 from "../../image/bumbu-cajun.jpg";
import serviceImg3 from "../../image/bumbu-garam-masala.jpg";
import serviceImg4 from "../../image/bumbu-kabsa.jpg";
import serviceImg5 from "../../image/bumbu-kebuli-aromatic.jpg";
import serviceImg6 from "../../image/bumbu-mandi.jpg";
import serviceImg7 from "../../image/bumbu-nasi-goreng-kambing.jpg";
import serviceImg8 from "../../image/bumbu-shish-kebab.jpg";
import serviceImg9 from "../../image/bumbu-tandori-masala.jpg";

import Img10 from "../../image/logo-tokped.png"

import "./style.css";

const BumbuList = () => {
    const cardInfo = [
        {imageCard: serviceImg1, title: "BUMBU BIRYANI"},
        {imageCard: serviceImg2, title: "BUMBU CAJUN"},
        {imageCard: serviceImg3, title: "BUMBU GARAM MASALA"},
        {imageCard: serviceImg4, title: "BUMBU KABSA"},
        {imageCard: serviceImg5, title: "BUMBU KEBULI AROMATIC"},
        {imageCard: serviceImg6, title: "BUMBU MANDI"},
        {imageCard: serviceImg7, title: "BUMBU NASI GORENG KAMBING"},
        {imageCard: serviceImg8, title: "BUMBU SHISH KEBAB"},
        {imageCard: serviceImg9, title: "BUMBU TANDOORI MASALA"},
    ];

    const renderCard = (card,index)=> {
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
                  <h3 className="sub-title">PRODUK BUMBU</h3>
                </div>
              </div>
            </div>
            
            <div className="row">
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
            <Link to="/products" className="cta-btn btn-border">
            Kembali
            </Link>
        </div>
        
      </div>
    </section>
  );
};
export default BumbuList;
