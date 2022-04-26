import React from "react";

import Img1 from "../../image/product-details.jpg";
import Img10 from "../../image/logo-tokped.png"

import "./style.css";
import { Link } from "react-router-dom";

const ProductSingle = () => {
  return (
    <section className="project-details-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="project-details-top">
              <div className="project-details-top-img">
                <img src={Img1} alt="img" />
              </div>
              
            </div>
            <div className="project-details-top-text">
              <h2>Jabal Nur High Quality</h2>
              <p>
                Beras Jabal Nur High Quality terbuat dari beras pilihan.
                Merupakan beras organik yang diolah dari padi pilihan
                berkualitas tinggi dan diproduksi dengan mesin berteknologi tinggi dan modern. Tanpa menggunakan
                bahan pengawet maupun pewarna buatan sehingga dapat menghasilkan beras premium yang higienis, enak dan alami.
              </p>
            </div>

            <div className="project-overview">
              
                  <div className="project-overview-box">
                    <h5>Product weight</h5>
                    <p>5 Kg</p>
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

          <div className="container mt-3 text-center">
            <Link to="/products" className="cta-btn btn-border">
              Kembali
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
};
export default ProductSingle;
