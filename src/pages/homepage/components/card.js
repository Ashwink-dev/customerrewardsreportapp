import React from "react";

const Card = (props) => (<div className="slide-it">
    <div className="movie-item">
        <div className={props.type === "TvShow" ? "mv-img tv-show" : "mv-img"}>
            <img src={props.details.smallPoster} alt="" width="185" height="284" />
        </div>
        <div className="hvr-inner">
            <a href={`details/${props.details.name}`}> Read more <i className="ion-android-arrow-dropright"></i> </a>
        </div>
        <div className="title-in">
            <h6><a href={`details/${props.details.name}`}>{props.details.name}</a></h6>
            <p><i className="ion-android-star"></i>7/10</p>
        </div>
    </div>
</div>
)

export default Card