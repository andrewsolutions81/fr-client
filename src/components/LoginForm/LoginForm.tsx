import React from "react";
import "./LoginForm.style.scss"

const LoginForm: React.FC = () => {
  return (
    <div className="loginform">
      <form action="" className="loginform__form">
        <h1 className="loginform__title">Santa Barbara Inmobiliaria</h1>
        <h2 className="loginform__iniciarsesion">Iniciar sesion </h2>
        <div className="loginform__inputs--container">
          <input
            className="loginform__input loginform__input--email"
            type="email"
            placeholder="Correo electronico"
          />
          <input
            className="loginform__input loginform__input--numero"
            type="password"
            placeholder="Contraseña"
          />
          <span className="loginform_error"> Error de credenciales</span>
        </div>
        <div className="loginform__actions">
          <a className="loginform__login" href="google.com">
            Sign up
          </a>
          <button className="loginform__btn">Ingresar</button>
        </div>
      </form>

    </div>
  );
};

export default LoginForm;
