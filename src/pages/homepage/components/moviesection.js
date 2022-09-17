import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Card from "./card";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: false,
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


const MovieSection = () => {
    const [FeaturedFilms, updateFeaturedFilms] = useState([])

    useEffect(() => {
        getFeaturedFilms()
    }, [])

    const getFeaturedFilms = async () => {
        await fetch("http://localhost:4000/movieAndTvShow/featured?showType=MOVIE").then(response => response.json()).then((finalResponse) => {
            updateFeaturedFilms(finalResponse)
        })
    }


    return (<div className="FeatureSection">
        <div className="title-hd">
        <h2>Featured Films</h2>
    </div>
        <div className="row">
            <div className="slick-multiItem">
                <Slider {...settings}>
                    {FeaturedFilms.map((FilmDetails) => <Card key={FilmDetails._id} details={FilmDetails} type="Movie" />)}
                </Slider>
            </div>
        </div>
    </div>)
}

export default MovieSection