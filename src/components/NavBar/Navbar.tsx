import React from "react";
import "./NavBar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__menu__container">
        <span className="navbar__menu--menu">Menú</span>
        <span className="material-icons">close</span>
      </div>
      <ul className="navbar__ul">
        <li className="navbar__item navbar__item--inicio">
          <span className="material-icons icon home-icon">home</span>
          <p className="inicio">Inicio</p>
        </li>
        <li className="navbar__item navbar__item--usuario">
          <span className="material-icons icon person-icon">person</span>
          <p className="usuario">Ingresar a mi cuenta</p>
        </li>
        <hr className="navbar__line" />
        <li className="navbar__item navbar__item--contacto">
          <span className="material-icons icon phone-icon">phone</span>
          <span className="contacto">Contacto</span>
        </li>
        <li className="navbar__item navbar__item--favoritos">
          <span className="material-icons icon favorite-icon">favorite</span>
          <p className="favorite">Favoritos</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
