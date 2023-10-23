import React from "react";
import "./NavBar.scss";
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  toggleIsNavBarOpen: React.MouseEventHandler<HTMLButtonElement>;
  setIsNavBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({toggleIsNavBarOpen, setIsNavBarOpen}) => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
    setIsNavBarOpen(false)
  };
  const navigateUser = () => {
    navigate('/user');
    setIsNavBarOpen(false)
  };
  const navigateContact = () => {
    navigate('/contact');
    setIsNavBarOpen(false)
  };
  // const navigateFavorites = () => {
  //   navigate('/favorites');
  //   setIsNavBarOpen(false)
  // };
  const navigateAdmin = () => {
    navigate('/admin');
    setIsNavBarOpen(false)
  };

  return (
    <nav className="navbar">
      <div className="navbar__menu__container">
        <span className="navbar__menu--menu">Menú</span>
        <button className="navbar__menu--close-btn">
        <span className="material-icons"onClick={toggleIsNavBarOpen}>close</span>
        </button>
      </div>
      <ul className="navbar__ul">
        <li className="navbar__item navbar__item--inicio" onClick={navigateHome}>
          <span className="material-icons icon home-icon">home</span>
          <p className="inicio navbar__item--text">Inicio</p>
        </li>
        <li className="navbar__item navbar__item--usuario" onClick={navigateUser}>
          <span className="material-icons icon person-icon">person</span>
          <p className="usuario navbar__item--text">Mi cuenta</p>
        </li>
        <hr className="navbar__line" />
        <li className="navbar__item navbar__item--contacto" onClick={navigateContact}>
          <span className="material-icons icon phone-icon">phone</span>
          <span className="contacto navbar__item--text">Contacto</span>
        </li>
 {/*        <li className="navbar__item navbar__item--favoritos" onClick ={navigateFavorites}>
          <span className="material-icons icon favorite-icon">favorite</span>
          <p className="favorite navbar__item--text">Favoritos</p>
        </li> */}
                <li className="navbar__item navbar__item--admin" onClick={navigateAdmin}>
          <span className="material-icons icon phone-icon">settings</span>
          <span className="contacto navbar__item--text">ADMIN</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
