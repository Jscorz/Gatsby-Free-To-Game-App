import React from "react"
import Layout from "../components/Layout"
import MobaGames from "../components/genre-categories/MobaGames"
import SEO from "../components/SEO"
const moba = () => {
  return (
    <Layout>
      <SEO title="MOBA" />
      <MobaGames />
    </Layout>
  )
}

export default moba
