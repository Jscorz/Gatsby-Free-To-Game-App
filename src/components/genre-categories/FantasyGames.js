import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const FantasyGames = () => {
  const {
    example: { data },
  } = useStaticQuery(query)

  return (
    <Wrapper>
      <section className="page">
        <div className="container">
          <h2>Genre: Fantasy</h2>
        </div>
        {data.map(game => {
          if (
            game.genre
              .toLowerCase()
              .split("")
              .filter(letter => letter !== " ")
              .join("") === "fantasy"
          ) {
            return (
              <section key={game.id}>
                <div className="container">
                  <h4>{game.title}</h4>
                </div>
                <img src={game.thumbnail} alt="game photo" />
                <h5>{game.short_description}</h5>
                <div className="container-left">
                  <h6>{game.platform}</h6>
                  <h6>Publisher: {game.publisher}</h6>
                </div>
                <div className="container-left">
                  <h6>Genre: {game.genre}</h6>
                  <h6>Release Date: {game.release_date}</h6>
                </div>
                <button className="btn">
                  <a href={game.game_url} target="_blank">
                    Play Now
                  </a>
                </button>
              </section>
            )
          }
        })}
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  section {
    border: 1px solid var(--black);
    padding: 2rem;
    margin-bottom: 2rem;
    background-color: rgba(255, 255, 255, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    & section {
      background-color: var(--grey-100);

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
    imageSharp {
      gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
    }
  }
`

export default FantasyGames
