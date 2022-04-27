import React from "react"
import Layout from "../components/Layout"
import MmoGames from "../components/genre-categories/MmoGames"
import SEO from "../components/SEO"

const mmo = () => {
  return (
    <Layout>
      <SEO title="MMO" />
      <MmoGames />
    </Layout>
  )
}

export default mmo
