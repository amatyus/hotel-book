import React from 'react'
import {Link} from 'react-router-dom'
import '../../../css/navBar.css'

const NavBar = () => {
  return (
    <>
      <nav className="navbar mt-4 px-5 ">
        <div className="container-fluid px-5">
          <div className="header-logo">
            <span className="logo" style={{color: '#192252'}}>
              Cootels
            </span>
          </div>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Главная
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/rooms">
                Номера
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacts">
                Контакты
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Администратор
              </Link>
            </li>
          </ul>
          <div className="header-login">
            <Link to="/login" className="btn">
              Sign In
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
