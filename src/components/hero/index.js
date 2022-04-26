import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from "../../image/slider-3.jpg";
import hero2 from "../../image/slider-2.jpg";
import Logo from "../../image/tokped-logo.png";

import "./style.css";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    var settings = {
      dots: false,
      arrows: false,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      fade: true,
    };

    return (
      <section className="hero-area">
        <div className="hero-social">
          <ul>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100072925083441" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/hajaraswadtaniindonesia?utm_medium=copy_link" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a href="https://api.whatsapp.com/send?phone=6285691598109" target="_blank" rel="noreferrer">
                <i className="fab fa-whatsapp" />
              </a>
            </li>
            <li>
              <a href="https://www.tokopedia.com/hajaraswadtaniindonesia?source=universe&st=product" target="_blank" rel="noreferrer">
                <img src={Logo} alt="tokopedia" className="logo__" />
              </a>
            </li>
          </ul>
          <p>Follow Us</p>
        </div>

        <div className="hero-slider">
          <div className="hero_arrows">
            <button className="button" onClick={this.previous}>
              <i className="fas fa-angle-left"></i>
            </button>
            <button className="button" onClick={this.next}>
              <i className="fas fa-angle-right"></i>
            </button>
          </div>
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <div className="slide">
              <div
                className="hero-slide-item"
                style={{ backgroundImage: `url(${hero1})` }}
              >
                <div className="container">
                  <div className="hero-text">
                    <h2>
                      PT HAJAR ASWAD TANI INDONESIA
                    </h2>
                    <div className="hero-action">
                      <Link to="/products" className="cta-btn btn-fill">
                        See Products
                      </Link>
                      <Link to="/contact" className="cta-btn btn-border">
                        Get Contact
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide">
              <div
                className="hero-slide-item"
                style={{ backgroundImage: `url(${hero2})` }}
              >
                <div className="container">
                  <div className="hero-text">
                    <h2>
                      PT HAJAR ASWAD TANI INDONESIA
                    </h2>
                    <div className="hero-action">
                      <Link to="/products" className="cta-btn btn-fill">
                        See Products
                      </Link>
                      <Link to="/contact" className="cta-btn btn-border">
                        Get Contact
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}

export default Hero;
