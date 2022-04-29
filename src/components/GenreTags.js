import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"

const GenreTags = () => {
  const example = useStaticQuery(query)
  const data = example.allGames.nodes

  const genreData = [
    ...new Set(
      data.map(item => {
        return item.genre
      })
    ),
  ]

  return (
    <Wrapper>
      <section className="grid-small">
        <div className="container-underline">
          <h2>Genres</h2>
          <div className="title-underline"></div>
        </div>
        {genreData.map(genre => {
          return (
            <Link
              to={`/${genre
                .toLowerCase()
                .split("")
                .filter(letter => letter !== " ")
                .join("")}`}
              className="container btn"
            >
              {genre}
            </Link>
          )
        })}
      </section>
    </Wrapper>
  )
}

export const query = graphql`
  {
    allGames {
      nodes {
        genre
      }
    }
  }
`

const Wrapper = styled.section`
  h2 {
    grid-column: 1 / 4;
    margin: 1.5rem auto 0;
  }

  .link {
    color: white;
    text-decoration: none;
    width: 100%;
    text-align: center;
  }
`

export default GenreTags
