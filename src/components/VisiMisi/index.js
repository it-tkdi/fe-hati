import React, { Component } from "react";

import Img1 from "../../image/vm-01.jpg";
import Img2 from "../../image/vm-02.jpg";

import "./style.css";

class VisiMisi extends Component {
  render() {
    return (
      <div>
        <section className="faq-page-area">
          <div className="container">
            <div className="row">
              
              <div className="col-md-6"> 
                <div className="container" data-aos="fade-up">
                  <div>
                    <h3 className="sub-title">Visi</h3>
                    <p>Menjadi perusahaan penghasil barang yang dapat diandalkan dalam pasar nasional dengan produk yang bermutu baik.</p>
                  </div>
                  <br />
                  <div>
                    <h3 className="sub-title">Misi</h3>
                    <p>Menyuplai produk yang dapat memahami kebutuhan dan keinginan secara bertanggung jawab kepada pelanggan serta menjaga mutu kesiapan barang.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="faq-img" data-aos="fade-up">
                  <div className="faq-img-one">
                    <img src={Img1} alt="img" />
                  </div>
                  <div className="faq-img-two">
                    <img src={Img2} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    );
  }
}

export default VisiMisi;
