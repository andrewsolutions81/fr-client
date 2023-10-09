import React, { ChangeEvent, FormEvent, useState } from "react";
import "./LoginForm.style.scss"

const LoginForm: React.FC = () => {
  const [loginInput, setloginInput] = useState({ email: "", password: "" });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setloginInput({ ...loginInput, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(loginInput);
  };

  const errorMessage: string = " Error de credenciales"

  return (
    <div className="loginform">
      <form action="" className="loginform__form" onSubmit={handleSubmit}>
        <h1 className="loginform__title">Santa Barbara Inmobiliaria</h1>
        <h2 className="loginform__iniciarsesion">Iniciar sesion </h2>
        <div className="loginform__inputs--container">
          <input
            className="loginform__input loginform__input--email"
            type="email"
            name="email"
            placeholder="Correo electronico"
            onChange={handleInputChange}
          />
          <input
            className="loginform__input loginform__input--numero"
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleInputChange}
          />
          <span className="loginform_error">{errorMessage}</span>
        </div>
        <div className="loginform__actions">
          <a className="loginform__login" href="google.com">
            Sign up
          </a>
          <button className="loginform__btn" type="submit">Ingresar</button>
        </div>
      </form>

    </div>
  );
};

export default LoginForm;
