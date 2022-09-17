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


const TvShowSection = () => {
    const [TvShows, updateTvShows] = useState([])

    useEffect(() => {
        getFeaturedTvShows()
    }, [])

    const getFeaturedTvShows = async () => {
        await fetch("http://localhost:4000/movieAndTvShow/featured?showType=TV").then(response => response.json()).then((finalResponse) => {
            updateTvShows(finalResponse)
        })
    }


    return (<div><div className="title-hd">
        <h2>Featured TV Shows</h2>
    </div>
        <div className="row">
            <div className="slick-multiItem">
                <Slider {...settings}>
                    {TvShows.map((ShowDetails) => <Card key={ShowDetails._id} details={ShowDetails} type="TvShow" />)}
                </Slider>
            </div>
        </div>
    </div>)
}

export default TvShowSection