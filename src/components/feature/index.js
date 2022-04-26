import React from "react";

import img1 from "../../image/aboutPage-1.jpg";
import img2 from "../../image/aboutPage-2.jpg";
import "./style.css";

const Feature = () => {
  return (
    <section className="about-page-area">
      <div className="container">
        <div className="row align-items-justify">
          
          <div className="col-md-6">
            <div className="about-left">
              <div className="sub-title">
                <p>PT. Hajar Aswad Tani Indonesia (HATI) adalah perusahaan yang bergerak dalam bidang perdagangan sembilan jenis kebutuhan masyarakat. 
                Diantaranya perdagangan beras baik beras lokal dan beras impor, daging dan daging olahan. Dengan adanya keberadaan kami, 
                perusahaan yang berorientasi terhadap kualitas dan pelanggan serta ketersediaan barang, 
                akan menjadi sebuah perusahaan yang dapat menjadi andalan bagi kebutuhan perusahaan Anda .</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="about-right">
              <div className="single-about-image">
                <img src={img1} alt="img" />
              </div>
              <div className="single-about-image">
                <img src={img2} alt="img" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
export default Feature;
