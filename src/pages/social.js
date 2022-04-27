import React from "react"
import Layout from "../components/Layout"
import SocialGames from "../components/genre-categories/SocialGames"
import SEO from "../components/SEO"

const social = () => {
  return (
    <Layout>
      <SEO title="Social" />
      <SocialGames />
    </Layout>
  )
}

export default social
