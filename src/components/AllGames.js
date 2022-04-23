import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const AllGames = () => {
  const {
    example: { data },
  } = useStaticQuery(query)
  console.log(data)

  return (
    <section className="page">
      {data.map(game => {
        return (
          <section key={game.id}>
            <h1>{game.title}</h1>
          </section>
        )
      })}
    </section>
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

export default AllGames
