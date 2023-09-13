import React from "react";
import "./Header.styles.scss";
import buildingLogo from "../../img/building_logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__burger">
        <span className="material-icons">menu</span>
      </div>
      <main className="header__brand">
        <img
          className="header__logo"
          src={buildingLogo}
          alt="finca raiz logo"
        />
        <h1 className="header__title">Inmobiliaria Santa Barvara </h1>
      </main>
      <section className="header__navbar_container">
      <span className="material-icons">account_box</span>
        <span className="header__ingresar">ingresar</span>
        <nav className="navbar">
          <ul className="navbar__ul">
            <li className="navbar__item navbar__item--contacto">Contacto</li>
            <li className="navbar__item navbar__item--favoritos">Favoritos</li>
            <li className="navbar__item navbar__item--usuario">Usuario</li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
