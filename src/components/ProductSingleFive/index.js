import React from 'react'
import { Link } from 'react-router-dom'
import "../ProductSingle/style.css"

import Img1 from '../../image/product-details-5.jpg'

import ProductImg1 from '../../image/product-box-1.jpg'
import ProductImg2 from '../../image/product-box-2.jpg'
import ProductImg3 from '../../image/product-box-3.jpg'
import ProductImg4 from '../../image/product-box-4.jpg'
import ProductImg5 from '../../image/product-box-5.jpg'
import ProductImg6 from '../../image/product-box-6.jpg'
import ProductImg7 from '../../image/product-box-7.jpg'
import ProductImg8 from '../../image/product-box-8.jpg'
import ProductImg9 from '../../image/product-box-9.jpg'

import Img10 from "../../image/logo-tokped.png"


const ProductSingleFive = () => {
    return (
        <section className="project-details-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="project-details-top">
                            <div className="project-details-top-img">
                                <img src={Img1} alt="img" />
                            </div>
                        </div>

                        <div className="project-details-top-text">
                            <h2>Vegetables</h2>
                            <p>
                                Sayuran organik dari HATI Fresh hadir ditengah kebutuhan konsumen akan pola hidup sehat, 
                                dengan sayuran yang dijamin kesegarannya bisa menjadi pilihan yang tepat bagi para konsumen.
                            </p>
                        </div>

                        <div className="project-overview">
                            <div className="project-overview-box">
                                <h5>Product Weight</h5>
                                <p>Kg/Pack</p>
                            </div>
                            
                        </div>

                        <section className="portfolio-area portfolio-page">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4 col-sm-6 no-paading">
                                        <img src={ProductImg1} alt="product detail" />
                                    </div>
                                    <div className="col-md-4 col-sm-6 no-paading">
                                        <img src={ProductImg2} alt="product detail" />
                                    </div>
                                    <div className="col-md-4 col-sm-6 no-paading">
                                        <img src={ProductImg3} alt="product detail" />
                                    </div>
                                    <div className="col-md-4 col-sm-6 no-paading">
                                        <img src={ProductImg4} alt="product detail" />
                                    </div>
                                    <div className="col-md-4 col-sm-6 no-paading">
                                        <img src={ProductImg5} alt="product detail" />
                                    </div>
                                    <div className="col-md-4 col-sm-6 no-paading">
                                        <img src={ProductImg6} alt="product detail" />
                                    </div>
                                    <div className="col-md-4 col-sm-6 no-paading">
                                        <img src={ProductImg7} alt="product detail" />
                                    </div>
                                    <div className="col-md-4 col-sm-6 no-paading">
                                        <img src={ProductImg8} alt="product detail" />
                                    </div>
                                    <div className="col-md-4 col-sm-6 no-paading">
                                        <img src={ProductImg9} alt="product detail" />
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>

                <div className="container mt-5">
                    <div className="row text-center">
                        <div className="col-lg-12">
                        <p className="text-center">
                            Jika anda tertarik dapat menghubungi kami di whatsapp dan email : 
                        </p>
                            <a href="https://api.whatsapp.com/send?phone=6285691598109" target="_blank" rel="noreferrer" className="cta-btn btn-fill size_btn me-2">Whatsapp</a>
                            <a href="mailto:julie@hajaraswadtaniindonesia.com" className="cta-btn btn-fill size_btn mt-2 mb-2">Email</a>
                        <p className="text-center">
                            Atau beli di
                        </p>
                        <a href="https://www.tokopedia.com/hajaraswadtaniindonesia?source=universe&st=product" target="_blank" rel="noreferrer">
                            <img src={Img10} alt="img" className="img_logo" />
                        </a>
                        </div>
                    </div>

                    <div className="container mt-3 text-center">
                        <Link to="/products" className="cta-btn btn-border">
                        Kembali
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductSingleFive
