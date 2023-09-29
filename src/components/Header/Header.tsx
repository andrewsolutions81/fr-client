import React, { useState }from "react";
import "./Header.styles.scss";
import buildingLogo from "../../img/building_logo.png";
import Navbar from "../NavBar/Navbar";

const Header = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false)

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
          {
            isNavBarOpen
            ?<span className="material-icons">expand_less</span>
            :<span className="material-icons">expand_more</span>
          }
        </div>
        <div className="header__navbar">
          {
            isNavBarOpen
            ?<Navbar />
            :null
          }
        </div>
      </section>
    </header>
  );
};

export default Header;
