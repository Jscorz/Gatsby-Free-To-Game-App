import React from "react"
import Layout from "../components/Layout"
import ActionRpgGames from "../components/genre-categories/ActionRpgGames"
import SEO from "../components/SEO"

const actionrpg = () => {
  return (
    <Layout>
      <SEO title="Action RPG Games" />
      <ActionRpgGames />
    </Layout>
  )
}

export default actionrpg
