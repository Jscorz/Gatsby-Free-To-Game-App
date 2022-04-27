import React from "react"
import Layout from "../components/Layout"
import MmoRpgGames from "../components/genre-categories/MmoRpgGames"
import SEO from "../components/SEO"

const mmorpg = () => {
  return (
    <Layout>
      <SEO title="MMORPG" />
      <MmoRpgGames />
    </Layout>
  )
}
export default mmorpg
