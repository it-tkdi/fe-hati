import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../../image/product-details-8.jpg";
import image2 from "../../image/product-details-7.jpg";
import image3 from "../../image/product-details-6.jpg";

import "./styles.css"

export class SliderImage extends Component {
    constructor(props){
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
            autoplayspeed: 2500,
            fade: true
        };
        
        return (
            <section className="hero_area" >
                <div className="container">
                    <div className="hero-slider">

                        <div className="hero-arrows">
                            <button className="button" onClick={this.previous}>
                                <i className="fas fa-angle-left" />
                            </button>
                            <button className="button" onClick={this.next}>
                                <i className="fas fa-angle-right"></i>
                            </button>
                        </div>

                        <Slider ref={(c) => (this.slider = c)} {...settings}>
                            <div className="slide">
                                <div 
                                    className="hero-slide-item"
                                    style={{ backgroundImage: `url(${image1})`}}
                                >
                                </div>
                            </div>
                            <div className="slide">
                                <div 
                                    className="hero-slide-item"
                                    style={{ backgroundImage: `url(${image2})`}}
                                >
                                </div>
                            </div>
                            <div className="slide">
                                <div 
                                    className="hero-slide-item"
                                    style={{ backgroundImage: `url(${image3})`}}
                                >
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        )
    }
}

export default SliderImage
