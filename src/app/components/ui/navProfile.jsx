import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from '../../hooks/useAuth'
import '../../../css/navProfile.css'
function NavProfile() {
  const {currentUser} = useAuth()
  const [isOpen, setOpen] = useState(false)
  const toggleMenu = () => {
    setOpen((prevState) => !prevState)
  }
  return (
    <div className="dropdown" onClick={toggleMenu}>
      <div className="btn dropdown-toggle d-flex align-items-center ">
        <div className="me-2 user">{currentUser.name}</div>
      </div>
      <div className={'w-100 dropdown-menu' + (isOpen ? ' show' : '')}>
        <Link to={`/user/${currentUser.id}`} className="dropdown-item">
          Profile
        </Link>
        <Link to="/logout" className="dropdown-item">
          Log Out
        </Link>
      </div>
    </div>
  )
}

export default NavProfile
