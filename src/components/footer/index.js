import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import "./style.css";
import Logo from "../../image/putihtokped.png";

const Footer = () => {
  const NewsletterHandler = (e) => {
    e.preventDefault();
  };
  const toTop = ()=> {
    scroll.scrollToTop();
  };

  return (
    <footer className="footer-area">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 order-lg-1 order-1">
              <div className="single-footer">
                <h3>About</h3>
                <p>
                  PT. Hajar Aswad Tani Indonesia (HATI)
                </p>
                <ul className="footer-contact">
                  <li>
                    <a href="tel:02150101598" className="link__">
                      <i className="fas fa-phone-square-alt" /> (021) 50101598
                    </a>
                  </li>
                  <li>
                    <a href="mailto:julie@hajaraswadtaniindonesia.com" className="link__">
                      <i className="fas fa-envelope" /> julie@hajaraswadtaniindonesia.com
                    </a>
                  </li>
                  <li>
                    <i className="fas fa-map" /> 
                      SOHO Pancoran Unit N-1110 <br />
                      Jl. Let. Jend. MT. Haryono kav 2-3 <br />
                      Tebet, Jakarta Selatan 12810 .
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 order-lg-2 order-3">
              <div className="single-footer">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <Link to="/about" onClick={toTop} smooth="true" delay={1000} duration={500}>About Us</Link>
                  </li>
                  <li>
                    <Link to="/products" onClick={toTop} smooth="true" delay={1000} duration={500}>Our Products</Link>
                  </li>
                  <li>
                    <Link to="/ourservices" onClick={toTop} smooth="true" delay={1000} duration={500}>Our Services</Link>
                  </li>
                  <li>
                    <Link to="/team" onClick={toTop} smooth="true" delay={1000} duration={500}>Meet The Team</Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={toTop} smooth="true" delay={1000} duration={500}>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 order-lg-3 order-4">
            </div>
            <div className="col-lg-4 col-sm-6 order-lg-4 order-2">
              <div className="single-footer">
                <h3>Newsletter</h3>
                <p>Sign up now for weekly news & updates.</p>
                <div className="newsletter_form">
                  <form onSubmit={NewsletterHandler}>
                    <input type="email" placeholder="Email Address" />
                    <button type="submit">
                      <i className="fas fa-long-arrow-alt-right" />
                    </button>
                  </form>
                </div>
                <ul className="footer-social">
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
                      <img src={Logo} alt="tokopedia" className="logo__footer" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="fade_rule" />
      </div>
    </footer>
  );
};
export default Footer;
