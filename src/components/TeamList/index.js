import React from "react";

import team2 from "../../image/team-4.jpg";
import team3 from "../../image/team-6.jpg";
import team4 from "../../image/team-2.jpg";
import team5 from "../../image/team-1.jpg";
import team6 from "../../image/team-9.jpg";
import team7 from "../../image/team-10.jpg";
import team8 from "../../image/team-3.jpg";
import team9 from "../../image/team-5.jpg";
import team10 from "../../image/team-8.jpg";

import "./style.css";

const Team = () => {
  return (
    <section className="team-page-area">
      <div className="container">
        
        <div className="row">
          <div className="col-lg-12">
            <div
              className="site-heading text-center wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.8s"
            >
              <h3 className="sub-title">TEAM MEMBERS</h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="row justify-content-center">
              <div className="col-md-3 col-sm-6">
                <div className="single-team-box">
                  <div className="team-image">
                    <img src={team3} alt="team" />
                    <div className="team-meta">
                      <h4>Hermansyah</h4>
                      <p>Direktur Utama</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="single-team-box">
                  <div className="team-image">
                    <img src={team2} alt="team" />
                    <div className="team-meta">
                      <h4>Marrita Erhar</h4>
                      <p>Direktur Keuangan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="row justify-content-center">
              <div className="col-md-3 col-sm-6">
                <div className="single-team-box">
                  <div className="team-image">
                    <img src={team4} alt="team" />
                    <div className="team-meta">
                      <h4>Fadhil Nur Ali</h4>
                      <p>Akuntan</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="single-team-box">
                  <div className="team-image">
                    <img src={team5} alt="team" />
                    <div className="team-meta">
                      <h4>Agung Purnomo</h4>
                      <p>Kepala Gudang</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="single-team-box">
                  <div className="team-image">
                    <img src={team6} alt="team" />
                    <div className="team-meta">
                      <h4>Yuli Damayanti</h4>
                      <p>Operasional</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="single-team-box">
                  <div className="team-image">
                    <img src={team7} alt="team" />
                    <div className="team-meta">
                      <h4>Yuliana Helani</h4>
                      <p>Finance</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="row justify-content-center">
              <div className="row">
                <div className="col-lg-12">
                  <div className="site-heading text-center">
                    <h3 className="section-title">Staff Warehouse</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="single-team-box">
                  <div className="team-image">
                    <img src={team8} alt="team" />
                    <div className="team-meta">
                      <h4>Lukman</h4>
                      <p>Operasional</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="single-team-box">
                  <div className="team-image">
                    <img src={team9} alt="team" />
                    <div className="team-meta">
                      <h4>Nanang</h4>
                      <p>Staff Warehouse</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="single-team-box">
                  <div className="team-image">
                    <img src={team10} alt="team" />
                    <div className="team-meta">
                      <h4>Ujang Ridwan</h4>
                      <p>Staff Warehouse</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default Team;
