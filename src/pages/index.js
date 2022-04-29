import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import ShortListGames from "../components/ShortListGames"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/hero.jpg"
            alt="pc gaming"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <article className="hero-container">
            <div className="hero-text">
              <h1>Free Gamer</h1>
              <h4>No More Wasted Money</h4>
            </div>
          </article>
        </header>
        <ShortListGames />
        <div className="container-padding">
          <Link to="/games">
            <button className="hipster">more games</button>
          </Link>
        </div>
      </main>
    </Layout>
  )
}
