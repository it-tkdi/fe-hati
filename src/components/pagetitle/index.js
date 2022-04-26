import React from "react";
import { Link } from "react-router-dom";
import bg from "../../image/breadcrumb-bg.jpg";
import Logo from "../../image/tokped-logo.png";

import "./style.css";

const PageTitle = (props) => {
  return (
    <section
      className="breadcrumb-area"
      style={{ backgroundImage: `url(${bg})` }}
    >
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
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-inn">
              <h1>{props.pageTitle}</h1>
              <ul>
                <li className="home">
                  <Link to="/">
                    <span className="fas fa-home" />
                  </Link>
                </li>
                <li>{props.pagesub}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
