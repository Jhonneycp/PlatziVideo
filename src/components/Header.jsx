import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutRequest } from  '../actions/index'
import classNames from 'classnames'
import gravatar from '../utils/Gravatar'

import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png'

const Header = props => {
  const { user, isLogin, isRegister } = props
  const validation = Object.keys(user).length > 0

  const handleLogout = () =>{
    props.logoutRequest({})
  }

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  })

  return(
    <header className={headerClass}>
    <Link to='/'>
    <img className="header__img" src={logo} alt="Platzi Video"/>
    </Link>
    <div className="header__menu">
      <div className="header__menu--profile">
        {validation ?
        <img src={gravatar(user.email)} alt={gravatar(user.email)}/>:
        <img src={userIcon} alt=""/>
        }
        <p>Perfil</p>
      </div>
      <ul>
        {
          validation?
          <li><a href="/">{user.name}</a></li>:
          null
        }
        {validation ?
        <li><a onClick={handleLogout} href="#logout">Cerrar Sesión</a></li>:
        <li><Link to="/login">Iniciar Sesión</Link></li>
        }
      </ul>
    </div>
  </header>
)}


const mapStateToProps = state => {
    return {
      user: state.user
    }
}

const mapDispatchToProps = {
  logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)