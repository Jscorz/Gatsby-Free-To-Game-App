import React from "react"
import Layout from "../components/Layout"
import SportsGames from "../components/genre-categories/SportsGames"
import SEO from "../components/SEO"

const sports = () => {
  return (
    <Layout>
      <SEO title="Sports" />
      <SportsGames />
    </Layout>
  )
}

export default sports
