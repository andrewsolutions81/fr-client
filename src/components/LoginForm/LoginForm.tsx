import React, { ChangeEvent, FormEvent, useState } from "react";
import "./LoginForm.style.scss";
import { apiLogin } from "../../api/apiAuth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/features/authSlice"

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const [loginInput, setloginInput] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setloginInput({ ...loginInput, [name]: value });

    const isValidEmail = (email: string) => {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailPattern.test(email);
    };
    if (name === "email" && !isValidEmail(value)) {
      setErrorMessage("Ingresar con un correo valido");
    } else {
      setErrorMessage("");
    }
  };

  const navigateSignup = () => {
    navigate("/signup");
  };

  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault();
    const userData = await apiLogin(loginInput);
    dispatch(setUser(userData));
    navigate("/")
  };

  return (
    <div className="loginform">
      <form action="" className="loginform__form" onSubmit={handleSubmit}>
        <h2 className="loginform__title">Santa Barbara Inmobiliaria Login</h2>
        <span className="loginform__iniciarsesion">Iniciar sesion </span>
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
          <span className="loginform__signup" onClick={navigateSignup}>
            Sign up
          </span>
          <button className="loginform__btn" type="submit">
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
