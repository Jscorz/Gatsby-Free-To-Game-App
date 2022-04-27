import React from "react"
import Layout from "../components/Layout"
import ArpgGames from "../components/genre-categories/ArpgGames"
import SEO from "../components/SEO"

const arpg = () => {
  return (
    <Layout>
      <SEO title="ARPG" />
      <ArpgGames />
    </Layout>
  )
}

export default arpg
