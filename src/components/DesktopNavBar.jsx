import React from "react"
import { Link } from "react-router-dom"

export default function DesktopNavBar() {
  return (
    <div className="wrapper">
      <div className="navHeader">
        <div className="navLinks">
          <Link to="/" className="item">
            Hem
          </Link>
          <Link to="/aboutMe" className="item">
            Om mig
          </Link>
          <Link to="/portfolio" className="item">
            Portfolio
          </Link>
          <Link to="/contact" className="item">
            Kontakta mig
          </Link>
        </div>
      </div>
    </div>
  )
}
