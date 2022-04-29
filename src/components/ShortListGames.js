import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const ShortListGames = () => {
  const example = useStaticQuery(query)
  const data = example.allGames.nodes

  const shortData = data.slice(19, 27)

  return (
    <Wrapper>
      <article className="page">
        <section className="grid">
          {shortData.map(game => {
            return (
              <section key={game.id} className="span-one">
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
                <button>
                  <a href={game.game_url} target="_blank" rel="noreferrer">
                    Play Now
                  </a>
                </button>
              </section>
            )
          })}
        </section>
      </article>
    </Wrapper>
  )
}
export const query = graphql`
  {
    allGames {
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

const Wrapper = styled.section`
  section {
    border: 1px solid var(--black);
    padding: 2rem 2rem 4rem 2rem;
    margin-top: 2rem;
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

export default ShortListGames
