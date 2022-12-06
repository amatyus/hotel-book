import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import '../../../css/navBar.css'
import {useAuth} from '../../hooks/useAuth'
import NavProfile from './navProfile'

const NavBar = () => {
  const {currentUser, isLoading} = useAuth()
  return (
    <>
      <nav className="navbar mt-4 px-5 ">
        <div className="container-fluid px-5">
          <div className="header-logo">
            <a className="navbar-brand" href="/">
              <span className="logo" style={{color: '#192252'}}>
                Cootels
              </span>
            </a>
          </div>
          <ul className="nav">
            <li className="nav-item">
              <NavLink className="nav-link px-0 mx-3" to="/" exact>
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link  px-0 mx-3" to="/rooms">
                Номера
              </NavLink>
            </li>

            {!isLoading && currentUser && currentUser.isAdmin && (
              <li className="nav-item">
                <NavLink className="nav-link  px-0 mx-3" to="/admin">
                  Администратор
                </NavLink>
              </li>
            )}
          </ul>

          <div className="d-flex">
            {currentUser ? (
              <NavProfile />
            ) : (
              <div className="header-login">
                <Link to="/login" className="btn">
                  Sign In
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
