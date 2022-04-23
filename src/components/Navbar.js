import React, { useState } from "react"
import { Link } from "gatsby"
import { BiMenu } from "react-icons/bi"
import logo from "../assets/images/logo_transparent.png"

const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <nav className="navbar">
      <section className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="free gamer logo" />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <BiMenu />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(!show)}
          >
            home
          </Link>
          <Link
            to="/games"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(!show)}
          >
            games
          </Link>
          <Link
            to="/categories"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(!show)}
          >
            categories
          </Link>
        </div>
      </section>
    </nav>
  )
}

export default Navbar
