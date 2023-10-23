import React, { MouseEventHandler, useState }from "react";
import "./Header.styles.scss";
import buildingLogo from "../../img/building_logo.png";
import Navbar from "../NavBar/Navbar";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false)
  const navigate = useNavigate();

  const toggleIsNavBarOpen: MouseEventHandler<HTMLButtonElement> = () => {
    setIsNavBarOpen((prevState) => !prevState);
  };

  const navigateHome = () => {
    navigate('/');
    setIsNavBarOpen(false)
  };

  return (
    <header className="header">
      <button className="header__burger" onClick={toggleIsNavBarOpen} >
        <span className="material-icons">menu</span>
      </button>
      <main className="header__brand" onClick={navigateHome}>
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
          <button className="header__ingresar--btn" onClick={toggleIsNavBarOpen}>
          {
            isNavBarOpen
            ?<span className="material-icons" >expand_less</span>
            :<span className="material-icons" >expand_more</span>
          }
          </button>
        </div>
        <div className="header__navbar">
          {
            isNavBarOpen
            ?<Navbar toggleIsNavBarOpen={toggleIsNavBarOpen} setIsNavBarOpen={setIsNavBarOpen}/>
            :null
          }
        </div>
      </section>
    </header>
  );
};

export default Header;
