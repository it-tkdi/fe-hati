import React from "react";
import Logo from "../../image/hati-1.jpg";
import MobileMenu from "../../components/MobileMenu";
import { Link } from "react-router-dom";

import "./style.css";

const Header = () => {

  return (
    <header className="header">
      <div className="row">
        <div className="col-lg-12">
          <div className="header-inn">
            <div className="site-logo">
              <Link to="/">
                <img src={Logo} alt="" className="logo-dwb" />
              </Link>
            </div>
            
            <div className="header-navigation">
              <div className="mainmenu">
                <nav id="menu">
                  <ul className="dropdown">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link to="/ourservices">Our services</Link>
                    </li>
                    <li>
                      <Link to="/team">Team</Link>
                    </li>
                    <li>
                      <Link to="/visimisi">Visi & Misi</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-action">
                <a href="tel:+6285691598109" className="search-toggle">
                  <i className="fas fa-mobile-alt"></i>
                </a>
                <a href="mailto:julie@hajaraswadtaniindonesia.com" className="header-btn">
                  <div className="icon-holder">
                    <i className="far fa-envelope"></i>
                  </div>
                  Get In Touch
                </a>
              </div>
              <MobileMenu />
            </div>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
