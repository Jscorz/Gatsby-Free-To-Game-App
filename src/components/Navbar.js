import React, { useState } from "react"
import { Link } from "gatsby"
import { BiMenu } from "react-icons/bi"

const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <nav className="navbar">
      <section className="nav-center">
        <div className="nav-header">
          <Link to="/">Logo Here</Link>
          <button>
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
