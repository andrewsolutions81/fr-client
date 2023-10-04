import React from "react";
import "./SignupForm.style.scss";

const SignupForm = () => {
  return (
    <div className="signupform">
      <form action="" className="signupform__form">
        <h1 className="signupform__title">Santa Barbara Inmobiliaria</h1>
        <h2 className="signupform__crearcuenta">Crear una cuenta</h2>
        <div className="signupform__inputs--container">
          <input
            className="signupform__input signupform__input--email"
            type="email"
            placeholder="Correo electronico"
          />
          <input
            className="signupform__input signupform__input--nombre"
            type="text"
            placeholder="Nombre"
          />
          <input
            className="signupform__input signupform__input--numero"
            type="text"
            placeholder="Número de celular"
          />
          <input
            className="signupform__input signupform__input--numero"
            type="password"
            placeholder="Contraseña"
          />
          <input
            className="signupform__input signupform__input--numero"
            type="password"
            placeholder="Confirmar contraseña"
          />
          <span className="signupform_error"> Error de contraseña</span>
        </div>
        <div className="signupform__actions">
          <a className="signupform__login" href="google.com">
            login
          </a>
          <button className="signupform__btn">Crear cuenta</button>
        </div>
      </form>
      <div className="signupform__external">
          <hr className="line" />
          <h4 className="crearcuentacon"> Crear cuenta con: </h4>
          <hr className="line" />
      </div>
      {/* <div className="google__container">
        <span className="google">google</span>
      </div> */}
    </div>
  );
};

export default SignupForm;
