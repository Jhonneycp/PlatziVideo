import React from 'react'
import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'
import '../assets/styles/components/Login.scss'

const Login = () => (

    <section className="login">
        <section className="login__container">
            <h2>Inicia Sesión</h2>
            <form className="login__container--form">
                <input className="login__container--input" type="text" placeholder="E-mail"/>
                <input className="login__container--input" type="password" placeholder="Password"/>
                <button className="button">Iniciar sesión</button>
                <div className="login__container--remember-me">
                    <label>
                    <input type="checkbox" name="" id="cbox1" value="checkbox"/>Recuérdame
                    </label>
                    <a href="/">Olvidé mi contraseña</a>
                </div>
            </form>
            <section className="login__container--social-media">
                <div><img src={googleIcon} alt="google-icon"/>Inicia sesión con Google</div>
                <div><img src={twitterIcon} alt="twitter-icon"/>Inicia sesión con Twitter</div>
            </section>
            <p className="login__container--register">¿No tienes ninguna cuenta? <a href="/">Registrate</a></p>
        </section>
    </section>

)

export default Login