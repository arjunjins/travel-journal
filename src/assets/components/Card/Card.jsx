import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="img-container">
        <img
          src="https://source.unsplash.com/WLxQvbMyfas"
          alt=""
          className="place-img"
        />
      </div>
      <div className="content-container">
        <div className="header">
          <img
            src="../../../../public/map.png"
            alt="map-logo"
            className="map-logo"
          />
          <h4 id="placename">JAPAN</h4>
          <a href="">View on Google Maps</a>
        </div>
        <h1 className="location">Mount Fuji</h1>
        <h3 className="dates">12 Jan, 2021 - 24 Jan, 2021</h3>
        <p className="desc">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
};

export default Card;
