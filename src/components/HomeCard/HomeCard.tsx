import React from 'react'
import "./HomeCard.style.scss"
import { Home } from '../../types';

const HomeCard = (props:Home) => {
  const { images_url, available, price , area , title , neighborhood  } = props;
  return (
    <div className="homecard">
      <img className="homecard__img" src={images_url[0]} alt="" />
      <h1 className="homecard__title">{title}</h1>
      <span className="homecard__available">is available : {available.toString()}</span>
      <span className="homecard__price">{price}</span>
      <span className="homecard__area">{`${area}mts2`}</span>
      <span className="homecard__neighborhood">{neighborhood}</span>
    </div>
  )
}

export default HomeCard
