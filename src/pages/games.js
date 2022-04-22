import React from "react"

const Games = () => {
  return <div>games</div>
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

export default Games
