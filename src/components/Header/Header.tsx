import React from "react";
import "./Header.styles.scss";
import buildingLogo from "../../img/building_logo.png";

const Header = () => {
  return (
    <header className="Header">
      <img className="logo__img" src={buildingLogo} alt="finca raiz logo" />
      <h1 className="header__title">Inmobiliaria Santa Barvara </h1>
      <p className="ingresar">ingresar</p>
    </header>
  );
};

export default Header;
