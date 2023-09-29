import React from 'react'
import "./Login.style.scss"
import LoginForm from '../../components/LoginForm/LoginForm'

const Login = () => {
  return (
    <section className="login">
      <div className="login__img">login</div>
      <LoginForm />
    </section>
  )
}

export default Login
