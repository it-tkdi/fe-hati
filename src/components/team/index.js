import React from "react";

import team1 from "../../image/team-4.jpg";
import team2 from "../../image/team-6.jpg";
import "./style.css";

const Team = () => {
  return (
    <section className="team-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="site-heading text-center wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.8s"
            >
              <h3 className="sub-title">TEAM MEMBERS</h3>
              {/* <h2 className="section-title">Our Creative Minds</h2> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="row justify-content-center">
              
              <div className="col-md-4 col-sm-6">
                <div className="single-team-box">
                  <div className="team-image">
                    <img src={team2} alt="team" />
                    <div className="team-meta">
                      <h4>Hermansyah</h4>
                      <p>Direktur Utama</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-team-box">
                  <div className="team-image">
                    <img src={team1} alt="team" />
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
        
      </div>
    </section>
  );
};
export default Team;
