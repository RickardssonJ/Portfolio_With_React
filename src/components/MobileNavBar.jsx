import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function MobileNavBar() {
  const [toggle, setToggler] = useState(false)

  let toggler = () => {
    toggle ? setToggler(false) : setToggler(true)
  }

  return (
    <div className="navMobileLinks">
      <div id="hamburger" onClick={toggler}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className={toggle ? "navMobile active" : "navMobile"}>
        <Link onClick={toggler} to="/" className="mobileLinks">
          Hem
        </Link>
        <Link onClick={toggler} to="/aboutMe" className="mobileLinks">
          Om mig
        </Link>
        <Link onClick={toggler} to="/portfolio" className="mobileLinks">
          Portfolio
        </Link>
        <Link onClick={toggler} to="/contact" className="mobileLinks">
          Kontakta mig
        </Link>
      </div>
    </div>
  )
}
