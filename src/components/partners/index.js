import React from "react";

import partnerImg1 from "../../image/partner-1.jpg";
import partnerImg2 from "../../img/partner-2.png";
import partnerImg3 from "../../img/partner-3.png";
import partnerImg7 from "../../img/partner-7.png";

import "./style.css";

const Partners = () => {
  return (
    <section className="partners-area pt-0" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="partner-inn">
              {/* <div className="container">
                <h2>Logo Product</h2>
              </div> */}
              <ul>
                <li>
                  <img src={partnerImg1} alt="img" />
                </li>
                <li>
                  <img src={partnerImg2} alt="img" />
                </li>
                <li>
                  <img src={partnerImg3} alt="img" />
                </li>
                <li>
                  <img src={partnerImg7} alt="img" />
                </li>
                {/* <li>
                  <img src={partnerImg7} alt="img" />
                </li>
                <li>
                  <img src={partnerImg5} alt="img" />
                </li>
                <li>
                  <img src={partnerImg6} alt="img" />
                </li>
                <li>
                  <img src={partnerImg4} alt="img" />
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
