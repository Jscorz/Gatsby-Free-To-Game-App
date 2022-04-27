import React from "react"
import AllGames from "../components/AllGames"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const games = () => {
  return (
    <Layout>
      <SEO title="All Games" />
      <div>
        <AllGames />
      </div>
    </Layout>
  )
}

export default games
