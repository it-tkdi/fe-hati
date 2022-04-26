import React from "react";
import { Link } from "react-router-dom";

import serviceImg1 from "../../image/beras-tdn.jpg";
import serviceImg2 from "../../image/beras-tdn-belakang.jpg";

import Img10 from "../../image/logo-tokped.png"

import "./style.css";

const BerasTdnList = () => {
  const cardInfo = [
    {imageCard: serviceImg1, title: "BERAS TOKO DAGING NUSANTARA"},
    {imageCard: serviceImg2, title: "BERAS TOKO DAGING NUSANTARA"},
  ];

  const renderCard = (card,index)=> {
    return (
      <div className="col-md-4  col-sm-6">
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
                  <h3 className="sub-title">PRODUK BERAS TOKO DAGING NUSANTARA</h3>
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
export default BerasTdnList;
