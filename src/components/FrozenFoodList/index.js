import React from "react";
import { Link } from "react-router-dom";

import serviceImg1 from "../../image/frozen-ayam.jpg";
import serviceImg2 from "../../image/frozen-bayam.jpg";
import serviceImg3 from "../../image/frozen-brokoli.jpg";
import serviceImg4 from "../../image/frozen-capcay.jpg";
import serviceImg5 from "../../image/frozen-gepuk-daging.jpg";
import serviceImg6 from "../../image/frozen-jagung.jpg";
import serviceImg7 from "../../image/frozen-jambu-merah.jpg";
import serviceImg8 from "../../image/frozen-kembang-kol.jpg";
import serviceImg9 from "../../image/frozen-lele.jpg";
import serviceImg10 from "../../image/frozen-mix-veggie.jpg";
import serviceImg11 from "../../image/frozen-nugget-ayam-sayur.jpg";
import serviceImg12 from "../../image/frozen-paru-bacem.jpg";
import serviceImg13 from "../../image/frozen-paru-ungkep.jpg";
import serviceImg14 from "../../image/frozen-perkedel-ayam-pedas.jpg";
import serviceImg15 from "../../image/frozen-perkedel-daging.jpg";
import serviceImg16 from "../../image/frozen-perkedel-original.jpg";
import serviceImg17 from "../../image/frozen-potato-cube.jpg";
import serviceImg18 from "../../image/frozen-potato-wedges.jpg";
import serviceImg19 from "../../image/frozen-sayur-sop.jpg";
import serviceImg20 from "../../image/frozen-sirsak.jpg";

import Img10 from "../../image/logo-tokped.png"

import "./style.css";

const FrozenFoodList = () => {
    const cardInfo = [
        { imageCard: serviceImg1, title: "FROZEN FOOD AYAM LENGKUAS"},
        { imageCard: serviceImg2, title: "FROZEN FOOD BAYAM"},
        { imageCard: serviceImg3, title: "FROZEN FOOD BROKOLI"},
        { imageCard: serviceImg4, title: "FROZEN FOOD CAPCAY"},
        { imageCard: serviceImg5, title: "FROZEN FOOD GEPUK DAGING"},
        { imageCard: serviceImg6, title: "FROZEN FOOD JAGUNG"},
        { imageCard: serviceImg7, title: "FROZEN FOOD JAMBU MERAH"},
        { imageCard: serviceImg8, title: "FROZEN FOOD KEMBANG KOL"},
        { imageCard: serviceImg9, title: "FROZEN FOOD LELE BUMBU"},
        { imageCard: serviceImg10, title: "FROZEN FOOD MIX VEGGIE"},
        { imageCard: serviceImg11, title: "FROZEN FOOD NUGGET AYAM SAYUR"},
        { imageCard: serviceImg12, title: "FROZEN FOOD PARU BACEM"},
        { imageCard: serviceImg13, title: "FROZEN FOOD PARU UNGKEP"},
        { imageCard: serviceImg14, title: "FROZEN FOOD PERKEDEL AYAM PEDAS"},
        { imageCard: serviceImg15, title: "FROZEN FOOD PERKEDEL DAGING"},
        { imageCard: serviceImg16, title: "FROZEN FOOD PERKEDEL ORIGINAL"},
        { imageCard: serviceImg17, title: "FROZEN FOOD POTATO CUBE"},
        { imageCard: serviceImg18, title: "FROZEN FOOD POTATO WEDGES"},
        { imageCard: serviceImg19, title: "FROZEN FOOD SAYUR SOP"},
        { imageCard: serviceImg20, title: "FROZEN FOOD SIRSAK"},
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
                  <h3 className="sub-title">PRODUK FROZEN FOOD</h3>
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
            <Link to="/products" className="cta-btn btn-border">
            Kembali
            </Link>
        </div>
        
      </div>
    </section>
  );
};
export default FrozenFoodList;
