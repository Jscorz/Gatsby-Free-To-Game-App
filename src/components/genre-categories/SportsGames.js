import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"

const SportsGames = () => {
  const example = useStaticQuery(query)
  const data = example.allGames.nodes

  gsap.registerPlugin(ScrollTrigger)
  const revealRefs = useRef([])
  revealRefs.current = []

  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
        },
        {
          duration: 1,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            id: `game-${index + 1}`,
            trigger: el,
            start: "top-center-=250",
            toggleActions: "play none none reverse",
          },
        }
      )
    })
  }, [])
  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  return (
    <Wrapper>
      <article className="page">
        <div className="container-underline">
          <h2>Genre: Sports</h2>
          <div className="title-underline-raised"></div>
        </div>
        <section className="grid">
          {data.map(game => {
            return (
              <section key={game.id} className="span-one" ref={addToRefs}>
                <div className="container-underline">
                  <h4>{game.title}</h4>
                  <div className="title-underline"></div>
                </div>
                <img src={game.thumbnail} alt="game" />
                <h5>{game.short_description}</h5>
                <div className="container">
                  <h6>{game.platform}</h6>
                  <h6>Publisher: {game.publisher}</h6>
                </div>
                <div className="container">
                  <h6>Genre: {game.genre}</h6>
                  <h6>Release Date: {game.release_date}</h6>
                </div>
                <button className="btn">
                  <a href={game.game_url} target="_blank" rel="noreferrer">
                    Play Now
                  </a>
                </button>
              </section>
            )
          })}
        </section>
        <div className="container-padding-bottom">
          <Link to="/categories">
            <button className="hipster">back to genres</button>
          </Link>
        </div>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  section {
    border: 1px solid var(--black);
    padding: 2rem;
    margin-bottom: 2rem;
    background-color: rgba(255, 255, 255, 0.25);

    & section {
      background-color: var(--grey-100);
      height: 100%;

      & h1,
      h2,
      h3,
      h5 {
        color: var(--grey-900);
        padding-top: 0.5rem;
      }
      & h4 {
        color: var(--grey-1000);
        padding-top: 0.5rem;
      }
      & h6 {
        color: var(--grey-900);
        padding-right: 2rem;
        padding-top: 0.5rem;
      }
      & img {
        display: block;
        object-fit: contain;
        width: 100%;
        padding-bottom: 1rem;
      }
    }
    button {
      & a {
        color: var(--grey-900);
        text-decoration: none;
        &:hover {
          color: white;
        }
      }
    }
  }
`
export const query = graphql`
  {
    allGames(filter: { genre: { eq: "Sports" } }) {
      nodes {
        id
        genre
        game_url
        freetogame_profile_url
        developer
        platform
        publisher
        release_date
        short_description
        thumbnail
        title
      }
    }
  }
`

export default SportsGames
