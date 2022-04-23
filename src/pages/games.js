import React from "react"
import Layout from "../components/Layout"

const games = () => {
  return (
    <Layout>
      <div>games</div>
    </Layout>
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

export default games
