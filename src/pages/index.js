import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import ShortListGames from "../components/ShortListGames"

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/hero.jpg"
            alt="controller for gaming"
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
        <button className="btn">more games</button>
      </main>
    </Layout>
  )
}
