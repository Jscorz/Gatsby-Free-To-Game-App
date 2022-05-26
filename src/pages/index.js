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
        0.75,
        {
          opacity: 0,
          scale: 3.5,
          easeInOut: "power2",
        },

        { opacity: 1, scale: 1 },
        "+=0.25"
      )
      .fromTo(
        q("#firstWord"),
        0.7,
        {
          y: -1000,
          opacity: 0,
          ease: "elastic",
        },
        {
          y: 0,
          opacity: 1,
        }
      )
      .fromTo(
        q("#secondWord"),
        0.7,
        {
          y: 1000,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
        },
        "-=.7"
      )
      .fromTo(
        q("h4"),
        0.7,
        {
          y: 100,
          opacity: 0,
          scale: 2,
          ease: "back",
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
        }
      )
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <main className="page">
        <header className="hero" ref={el}>
          <img src={heroImg} alt="pc gaming" className="hero-img" />
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
