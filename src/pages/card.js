import React from "react"
import Layout from "../components/Layout"
import CardG from "../components/genre-categories/CardG"
import SEO from "../components/SEO"

const card = () => {
  return (
    <Layout>
      <SEO title="Card" />
      <CardG />
    </Layout>
  )
}

export default card
