import React from "react"
import Layout from "../components/Layout"
import FightingGames from "../components/genre-categories/FightingGames"
import SEO from "../components/SEO"

const fighting = () => {
  return (
    <Layout>
      <SEO title="Fighting" />
      <FightingGames />
    </Layout>
  )
}

export default fighting
