// HomeCard.tsx
import React from "react";
import "./HomeCard.style.scss";
import { Link } from "react-router-dom";
import { Home } from "../../types";

const HomeCard = (props: Home) => {
  const { images_url, available, price, area, title, neighborhood, id } = props;
  return (
    <Link to={`/home/${id}`}>
      <div className="homecard">
        <img
          className="homecard__img"
          src={images_url[0].secure_url}
          alt="Nice home thumbnail."
        />
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
