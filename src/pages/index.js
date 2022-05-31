import React, { useRef, useLayoutEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import ShortListGames from "../components/ShortListGames"
import SEO from "../components/SEO"
import { gsap } from "gsap"
import heroImg from "../assets/images/hero.jpg"
// import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  const el = useRef()
  const q = gsap.utils.selector(el)
  const tl = useRef()

  useLayoutEffect(() => {
    tl.current = gsap
      .timeline()

      .fromTo(
        q(".hero-img"),
        1.5,
        {
          opacity: 0,
          scale: 5.5,
          x: 1000,
          easeInOut: "power3",
        },

        { opacity: 1, scale: 1, x: 0 }
      )
      .fromTo(
        q("#firstWord"),
        1.1,
        {
          x: 600,
          opacity: 0,
          ease: "elastic",
        },
        {
          x: 0,
          opacity: 1,
        },
        "-=1"
      )
      .fromTo(
        q("#secondWord"),
        1.1,
        {
          x: -600,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
        "-=1"
      )
      .fromTo(
        q("h4"),
        0.7,
        {
          y: 100,
          opacity: 0,
          scale: 2,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
        },
        "-=.2"
      )
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <main className="page">
        <header className="hero" ref={el}>
          <img src={heroImg} alt="" className="hero-img" />
          {/* <StaticImage
            src="../assets/images/hero.jpg"
            alt="pc gaming"
            className="hero-img"
            // placeholder="tracedSVG"
            Style={`
              overflow: hidden;
            `}
            layout="fullWidth"
          /> */}
          <article className="hero-container">
            <div className="hero-text">
              <h1>
                <span id="firstWord">Free </span>
                <span id="secondWord">Gamer</span>
              </h1>
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
