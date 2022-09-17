import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};


const HeroSection = (props) => {

    return (<div className="slider movie-items">
        <div className="container">
            <div className="row">
                <Slider {...settings}>
                    <div className="movie-item">
                        <div className="mv-img">
                            <a href="/"><img src="images/uploads/slider2.jpg" alt="" width="285" height="437" /></a>
                        </div>
                        <div className="title-in">
                            <div className="cate">
                                <span className="yell"><a href="/">action</a></span>
                            </div>
                            <h6><a href="/">The revenant</a></h6>
                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                        </div>
                    </div>
                    <div className="movie-item">
                        <div className="mv-img">
                            <a href="/"><img src="images/uploads/slider3.jpg" alt="" width="285" height="437" /></a>
                        </div>
                        <div className="title-in">
                            <div className="cate">
                                <span className="green"><a href="/">comedy</a></span>
                            </div>
                            <h6><a href="/">Die hard</a></h6>
                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                        </div>
                    </div>
                    <div className="movie-item">
                        <div className="mv-img">
                            <a href="/"><img src="images/uploads/slider4.jpg" alt="" width="285" height="437" /></a>
                        </div>
                        <div className="title-in">
                            <div className="cate">
                                <span className="blue"><a href="/">Sci-fi</a></span> <span className="orange"><a href="/">advanture</a></span>
                            </div>
                            <h6><a href="/">The walk</a></h6>
                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                        </div>
                    </div>
                    <div className="movie-item">
                        <div className="mv-img">
                            <a href="/"><img src="images/uploads/slider1.jpg" alt="" width="285" height="437" /></a>
                        </div>
                        <div className="title-in">
                            <div className="cate">
                                <span className="blue"><a href="/">Sci-fi</a></span>
                            </div>
                            <h6><a href="/">Interstellar</a></h6>
                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                        </div>
                    </div>
                    <div className="movie-item">
                        <div className="mv-img">
                            <a href="/"><img src="images/uploads/slider2.jpg" alt="" width="285" height="437" /></a>
                        </div>
                        <div className="title-in">
                            <div className="cate">
                                <span className="yell"><a href="/">action</a></span>
                            </div>
                            <h6><a href="/">The revenant</a></h6>
                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                        </div>
                    </div>
                    <div className="movie-item">
                        <div className="mv-img">
                            <img src="images/uploads/slider3.jpg" alt="" width="285" height="437" />
                        </div>
                        <div className="title-in">
                            <div className="cate">
                                <span className="green"><a href="/">comedy</a></span>
                            </div>
                            <h6><a href="/">Die hard</a></h6>
                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                        </div>
                    </div>
                    <div className="movie-item">
                        <div className="mv-img">
                            <img src="images/uploads/slider4.jpg" alt="" width="285" height="437" />
                        </div>
                        <div className="title-in">
                            <div className="cate">
                                <span className="blue"><a href="/">Sci-fi</a></span> <span className="orange"><a href="/">advanture</a></span>
                            </div>
                            <h6><a href="/">The walk</a></h6>
                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                        </div>
                    </div>
                    <div className="movie-item">
                        <div className="mv-img">
                            <img src="images/uploads/slider3.jpg" alt="" width="285" height="437" />
                        </div>
                        <div className="title-in">
                            <div className="cate">
                                <span className="green"><a href="/">comedy</a></span>
                            </div>
                            <h6><a href="/">Die hard</a></h6>
                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    </div>)
}

export default HeroSection