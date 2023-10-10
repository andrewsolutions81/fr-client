import React,{ ChangeEvent, FormEvent, useState }from "react";
import "./SignupForm.style.scss"
import { signupInput } from "../../types"
import { apiSignup } from "../../api/apiSignup";

const SignupForm = () => {
  const signupInitialState :signupInput =
  {
    username:"",
    email: "",
    password: "",
    passwordCheck: "",
    phone_number: "",
  }

  const [ signupInput, setSignupInput ] = useState(signupInitialState);
  const [ errorMessage, setErrorMessage ] = useState("")

  const isValidEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupInput({ ...signupInput, [name]: value });

    if (name === "email" && !isValidEmail(value)) {
      setErrorMessage("Ingresar con un correo valido");
    } else if (name === "passwordCheck" && value !== signupInput.password) {
      setErrorMessage("La contraseña no concuerda");
    } else {
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    delete signupInput.passwordCheck
    apiSignup(signupInput)
  };

  return (
    <div className="signupform">
      <form action="" className="signupform__form" onSubmit={handleSubmit}>
        <h1 className="signupform__title">Santa Barbara Inmobiliaria</h1>
        <h2 className="signupform__crearcuenta">Crear una cuenta</h2>
        <div className="signupform__inputs--container">
          <input
            className="signupform__input signupform__input--email"
            type="email"
            name="email"
            placeholder="Correo electronico"
            onChange={handleInputChange}
          />
          <input
            className="signupform__input signupform__input--nombre"
            type="text"
            placeholder="Nombre"
            name="username"
            onChange={handleInputChange}
          />
          <input
            className="signupform__input signupform__input--numero"
            type="text"
            placeholder="Número de celular"
            name="phone_number"
            onChange={handleInputChange}
          />
          <input
            className="signupform__input signupform__input--numero"
            type="password"
            placeholder="Contraseña"
            name="password"
            onChange={handleInputChange}
          />
          <input
            className="signupform__input signupform__input--numero"
            type="password"
            placeholder="Confirmar contraseña"
            name="passwordCheck"
            onChange={handleInputChange}
          />
          <span className="signupform_error">{errorMessage}</span>
        </div>
        <div className="signupform__actions">
          <a className="signupform__login" href="google.com">
            login
          </a>
          <button className="signupform__btn" type="submit">Crear cuenta</button>
        </div>
      </form>
      <div className="signupform__external">
          <hr className="line" />
          <h4 className="crearcuentacon"> Crear cuenta con: </h4>
          <hr className="line" />
      </div>
      <div className="google__container">
        <span className="google">google</span>
      </div>
    </div>
  );
};

export default SignupForm;
