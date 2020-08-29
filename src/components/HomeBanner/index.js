import React from "react";
import slideImage from "../../assets/img/slide-image.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "react-feather";
// import  from "react-feather";

function ArrowRight({ onClick }) {
  return (
    <button onClick={onClick} className="HomeBanner__arrow-right">
      <ChevronRight color="#fff" width="36px" height=" 50px" />
    </button>
  );
}

function ArrowLeft({ onClick }) {
  return (
    <button onClick={onClick} className="HomeBanner__arrow-left">
      <ChevronLeft color="#fff" width="36px" height=" 50px" />
    </button>
  );
}

export default function HomeBanner() {
  var settings = {
    nextArrow: <ArrowLeft />,
    prevArrow: <ArrowRight />,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="HomeBanner">
      <div className="HomeBanner__inside">
        <Slider {...settings} className="HomeBanner__slide">
          <div className="HomeBanner__slide-item">
            <img src={slideImage} alt="Banner" />
          </div>
          <div className="HomeBanner__slide-item">
            <img src={slideImage} alt="Banner" />
          </div>
          <div className="HomeBanner__slide-item">
            <img src={slideImage} alt="Banner" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
