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
              <h1>{game.title}</h1>
              <h2>{game.publisher}</h2>
            </section>
          )
        })}
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  section {
    border: 1px solid white;
    padding: 2rem;
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
