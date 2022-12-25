import React from "react";
import "./Card.css";

const Card = (props) => {
  let {
    id,
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
  } = props.item;

  return (
    <div className="card">
      <div className="img-container">
        <img src={imageUrl} alt="" className="place-img" />
      </div>
      <div className="content-container">
        <div className="header">
          <img
            src="../../../../public/map.png"
            alt="map-logo"
            className="map-logo"
          />
          <h4 id="placename">{location}</h4>
          <a href={googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1 className="location">{title}</h1>
        <h3 className="dates">
          {startDate} - {endDate}
        </h3>
        <p className="desc">{description}</p>
      </div>
    </div>
  );
};

export default Card;
