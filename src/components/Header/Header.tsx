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
          alt="finca raiz building logo"
          loading="lazy"
        />
        <h1 className="header__title">Inmobiliaria Santa Barbara </h1>
      </main>
      <section className="header__navbar_container">
        <div className="header__ingresar">
          <span className="material-icons">account_box</span>
          <h3 className="header__ingresar--text">Ingresar</h3>
          <span className="material-icons">expand_more</span>
          <span className="material-icons">expand_less</span>
        </div>
        <div className="header__navbar">
          {/* <nav className="navbar">
            <ul className="navbar__ul">
              <li className="navbar__item navbar__item--favoritos">
                Favoritos
              </li>
              <li className="navbar__item navbar__item--usuario">Usuario</li>
              <li className="navbar__item navbar__item--contacto">Contacto</li>
              <li className="navbar__item navbar__item--usuario">Log Out</li>
            </ul>
          </nav> */}
        </div>
      </section>
    </header>
  );
};

export default Header;
