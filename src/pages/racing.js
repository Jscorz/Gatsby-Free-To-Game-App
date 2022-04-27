import React from "react"
import Layout from "../components/Layout"
import RacingGames from "../components/genre-categories/RacingGames"
import SEO from "../components/SEO"

const racing = () => {
  return (
    <Layout>
      <SEO title="Racing" />
      <RacingGames />
    </Layout>
  )
}

export default racing
