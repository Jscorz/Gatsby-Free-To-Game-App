import React from "react"
import Layout from "../components/Layout"
import ShooterGames from "../components/genre-categories/ShooterGames"
import SEO from "../components/SEO"

const shooter = () => {
  return (
    <Layout>
      <SEO title="Shooter" />
      <ShooterGames />
    </Layout>
  )
}

export default shooter
