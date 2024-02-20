// HomeCard.tsx
import React from "react";
import "./HomeCard.style.scss";
import { Link } from "react-router-dom";
import { Home } from "../../types";

const HomeCard = (props: Home) => {
  const { images_url, available, price, area, title, neighborhood, id } = props;
  console.log(props)
  return (
    <Link to={`/home/${id}`}>
      <div className="homecard">
        {images_url && images_url[0] ? (
          <img
            className="homecard__img"
            src={images_url[0].secure_url}
            alt="Awesome home opportunity"
          />
        ) : (
          <div className="homecard__no-image">
          <span className="material-icons icon home-icon">home</span>
          </div>
        )}
        <h4 className="homecard__title">{title}</h4>
        <span className="homecard__available">
          is available : {available.toString()}
        </span>
        <span className="homecard__price">{price}</span>
        <span className="homecard__area">{`${area}mts2`}</span>
        <span className="homecard__neighborhood">{neighborhood}</span>
      </div>
    </Link>
  );
};

export default HomeCard;
