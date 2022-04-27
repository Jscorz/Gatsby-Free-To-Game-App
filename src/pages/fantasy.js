import React from "react"
import Layout from "../components/Layout"
import FantasyGames from "../components/genre-categories/FantasyGames"
import SEO from "../components/SEO"

const fantasy = () => {
  return (
    <Layout>
      <SEO title="Fantasy" />
      <FantasyGames />
    </Layout>
  )
}

export default fantasy
