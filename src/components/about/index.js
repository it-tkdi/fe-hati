import React from "react";

import bg from "../../image/BG.jpg";
import img1 from "../../image/BERAS.jpg";
import img2 from "../../image/DAGING.jpg";

import "./style.css";

const About = () => {
  return (
    <section className="about-area" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6">
            <div className="about-left" data-aos="fade-right">
                <div className="site-heading">
                  <h3 className="sub-title">ABOUT US</h3>

                  <p>
                    PT  Hajar Aswad Tani Indonesia (HATI) adalah perusahaan yang bergerak dalam bidang perdagangan sembilan jenis kebutuhan masyarakat. 
                    Diantaranya perdagangan beras baik beras lokal dan beras impor, daging dan daging olahan. Dengan adanya keberadaan kami, 
                    perusahaan yang berorientasi terhadap kualitas dan pelanggan serta ketersediaan barang, 
                    akan menjadi sebuah perusahaan yang dapat menjadi andalan bagi kebutuhan perusahaan Anda .
                  </p>
                </div>
                
            </div>
          </div>
          
          <div className="col-lg-6 offset-lg-1 col-md-6">
            <div className="about-right" data-aos="fade-left">
              <img className="about_img_1" src={img2} alt="img" />
              <img className="about_img_2" src={img1} alt="img" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
