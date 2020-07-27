import React, {useState} from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import "./header.scss"
import Logo from "../images/Logo.svg"

const Header = ({ siteTitle }) => {
  const [navOpen, setNavOpen] = useState(0)

  return(
    <header>
      <nav className="container header__nav">
        <ul className={ navOpen ? `header__nav__left show` : `header__nav__left`}>
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="#">Products</Link>
          </li>
          <li>
            <Link to="#">Features</Link>
          </li>
        </ul>

        <div className="header__nav__logo">
          <img src={Logo} alt={siteTitle} onClick={ () => { setNavOpen(!navOpen) } }/>
        </div>

        <ul className={ navOpen ? `header__nav__right show` : `header__nav__right`}>
          <li>
            <Link to="#">Pricing</Link>
          </li>
          <li>
            <Link to="#">Blog</Link>
          </li>
          <li>
            <Link to="#">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
