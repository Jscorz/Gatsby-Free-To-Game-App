import React from "react"
import Layout from "../components/Layout"
import CardGames from "../components/genre-categories/CardGames"
import SEO from "../components/SEO"

const cardGame = () => {
  return (
    <Layout>
      <SEO title="Card Games" />
      <CardGames />
    </Layout>
  )
}

export default cardGame
