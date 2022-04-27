import React from "react"
import Layout from "../components/Layout"
import StrategyGames from "../components/genre-categories/StrategyGames"
import SEO from "../components/SEO"

const strategy = () => {
  return (
    <Layout>
      <SEO title="Strategy" />
      <StrategyGames />
    </Layout>
  )
}

export default strategy
