import './index.scss'
import { useState } from 'react'
import Logo from '../../assets/Fist logo clear.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faBars,
  faClose,
  faMicrophone
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
        <a href='/#title' className="logo">
            <img src={Logo} alt="Logo" />
        </a>

        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact="true" activeclassname="active" to="/" >
                <FontAwesomeIcon icon={faHome} color="#cccccc" />
            </NavLink>
            <NavLink activeclassname="active" className="early" to="/early">
                <p>50's</p>
            </NavLink>
            <NavLink activeclassname="active" className="later" to="/later">
                <p>60's</p>
            </NavLink>
            <NavLink activeclassname="active" className="people" to="/people">
                <FontAwesomeIcon icon={faUser} color="#cccccc" />
            </NavLink>
            <NavLink activeclassname="active" className="speeches" to="/speeches">
                <FontAwesomeIcon icon={faMicrophone} color="#cccccc" />
            </NavLink>

            <FontAwesomeIcon className='close-icon' icon={faClose} color="#cccccc" onClick={() => setShowNav(false)} size='3x'/>
        </nav>

        <FontAwesomeIcon 
            onClick={() => setShowNav(true)}
            icon={faBars}
            color="#cccccc"
            size="3x"
            className='hamburger-icon' />
    </div>
  )
}

export default Sidebar