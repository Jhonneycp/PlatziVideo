import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'
import '../assets/styles/components/Login.scss'

const Login = () => {
    const [form, setValues] = useState({
        email: ''
    })

    const handleInput = e =>{
        setValues({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e =>{
        e.preventDefault()
        console.log(form)
    }

    return(
        <section className="login">
            <section className="login__container">
                <h2>Inicia Sesión</h2>
                <form className="login__container--form" onSubmit={handleSubmit}>
                    <input
                    name='email'
                    className="login__container--input"
                    type="text"
                    placeholder="E-mail"
                    onChange={handleInput}/>
                    <input
                    name='password'
                    className="login__container--input"
                    type="password"
                    placeholder="Password"
                    onChange={handleInput}/>
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
                <p className="login__container--register">¿No tienes ninguna cuenta? <Link to="/register">Registrate</Link></p>
            </section>
        </section>
    )
}

export default Login