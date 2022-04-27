import React from "react"
import Layout from "../components/Layout"
import BattleRoyaleGames from "../components/genre-categories/BattleRoyaleGames"
import SEO from "../components/SEO"

const battleroyale = () => {
  return (
    <Layout>
      <SEO title="Battle Royale" />
      <BattleRoyaleGames />
    </Layout>
  )
}

export default battleroyale
