import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const ShortListGames = () => {
  const {
    example: { data },
  } = useStaticQuery(query)

  const shortData = data.slice(19, 27)

  return (
    <Wrapper>
      <article className="page">
        <section className="grid">
          {shortData.map(game => {
            return (
              <section key={game.id}>
                <div className="container-underline">
                  <h4>{game.title}</h4>
                  <div className="title-underline"></div>
                </div>
                <img src={game.thumbnail} alt="game photo" />
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
                  <a href={game.game_url} target="_blank">
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
    example {
      data {
        id
        platform
        genre
        title
        publisher
        release_date
        short_description
        thumbnail
        game_url
        developer
        freetogame_profile_url
      }
    }
  }
`

const Wrapper = styled.section`
  section {
    border: 1px solid var(--black);
    padding: 2rem;
    margin-top: 2rem;
    background-color: rgba(255, 255, 255, 0.25);
    /* display: flex;
    flex-direction: column; */
    /* justify-items: center;
    align-items: center;
    text-align: center;

    display: grid;
    grid-template-columns: 1fr; */

    & section {
      background-color: var(--grey-100);
      @media screen and (min-width: 992px) {
        width: 40vw;
      }
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
        object-fit: cover;
        height: 100%;
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
