import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const AllGames = () => {
  const {
    example: { data },
  } = useStaticQuery(query)

  const shortData = data.slice(0, 10)
  console.log(data)

  return (
    <Wrapper>
      <section className="page">
        {shortData.map(game => {
          return (
            <section key={game.id}>
              <h4>{game.title}</h4>
              <img src={game.thumbnail} alt="game photo" />
              <h5>{game.short_description}</h5>
              <h6>Publisher: {game.publisher}</h6>
              <h6>Genre: {game.genre}</h6>
              <button>
                <a href={game.game_url} target="_blank">
                  Play Now
                </a>
              </button>
            </section>
          )
        })}
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  section {
    border: 1px solid var(--black);
    padding: 2rem;
    margin-top: 2rem;
    background-color: var(--grey-300);

    & section {
      background-color: var(--grey-100);

      & h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: var(--grey-900);
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
  }
`

export default AllGames
