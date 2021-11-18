import React, { Component } from "react";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image"
import {businessImageContainer, slider} from "./business.module.css"

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className={slider}>            
          <Slider {...settings}>
            <div className={businessImageContainer}>
            <StaticImage src="../images/marriage-contract.jpg"/>
            </div>
            <div className={businessImageContainer}>
            <StaticImage src="../images/marriage-contract.jpg"/>
            </div>
            <div className={businessImageContainer}>
            <StaticImage src="../images/marriage-contract.jpg"/>
            </div>
            <div className={businessImageContainer}>
            <StaticImage src="../images/marriage-contract.jpg"/>
            </div>
            <div className={businessImageContainer}>
            <StaticImage src="../images/marriage-contract.jpg"/>
            </div>
            <div className={businessImageContainer}>
            <StaticImage src="../images/marriage-contract.jpg"/>
            </div>
          </Slider>
        </div>
      );
    }
  }
